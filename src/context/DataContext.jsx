import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import api from '../api/posts'
import useWindowSize from '../hooks/useWindowSize'
import useAxiosFetch from '../hooks/useAxiosFetch'

import { createContext, useState, useEffect } from 'react'
const DataContext = createContext({})
export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const { width } = useWindowSize()
  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  )
  useEffect(() => {
    setPosts(data)
  }, [data])
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const postLists = posts.filter((post) => id !== post.id)
      setPosts(postLists)
      navigate('/')
    } catch (error) {
      console.log(`Error: ${err.message}`)
    }
  }

  const handleEdit = async (id) => {
    e.preventDefault()
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updatedPost = { id, title: editTitle, datetime, body: editBody }

    try {
      const reponse = await api.put(`/posts/${id}`, updatedPost)
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      )
    } catch (error) {
      console.log(`Error: ${err.message}`)
    } finally {
      setEditBody('')
      setEditTitle('')
      navigate('/')
    }
  }

  useEffect(() => {
    const filteredResult = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    )
    setSearchResult(filteredResult.reverse())
  }, [search, posts])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }
    try {
      const response = await api.post('/posts', newPost)
      const allPosts = [...posts, response.data]
      setPosts(allPosts)
      setPostBody('')
      setPostTitle('')
      navigate('/')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }
  return (
    <DataContext.Provider
      value={{
        width,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
export default DataContext
