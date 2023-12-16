import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import About from './About'
import Missing from './Missing'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import './tut.css'
const Tut2 = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '1st post',
      datetime: 'July 16, 2021 11:47:39 AM',
      body: 'lorem ipsum dolor sit amet, ceonse w this fjhtbnabjahj',
    },
    {
      id: 2,
      title: '2nd post',
      datetime: 'July 16, 2021 11:47:39 AM',
      body: 'lorem ipsum dolor sit amet, ceonse',
    },
    {
      id: 3,
      title: '3rd post',
      datetime: 'July 16, 2021 11:47:39 AM',
      body: 'lorem ipsum dolor sit amet, ceonse',
    },
    {
      id: 4,
      title: '4th post',
      datetime: 'July 16, 2021 11:47:39 AM',
      body: 'lorem ipsum dolor sit amet, ceonse',
    },
  ])
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [searhResult, setSearchResult] = useState([])
  const handleDelete = (id) => {
    const postLists = posts.filter((post) => id !== post.id)
    setPosts(postLists)
    navigate('/')
  }

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="post" element={<NewPost />} />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/missing" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default Tut2
