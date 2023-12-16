import { useEffect, useState } from 'react'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
import apiRequest from './apiRequest'
function Tut1() {
  const API_URL = 'http://localhost:3500/items'

  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not receive expected data')
        const listItem = await response.json()
        setItems(listItem)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
        console.log(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      fetchItems()
    }, 1000)
  }, [])

  // const setAndSaveItems = (newItems) => {}
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItem = [...items, myNewItem]
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewItem),
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) {
      setFetchError(result)
    }
    setItems(listItem)
  }

  const handleCheck = async (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItem)
    const myItem = listItem.filter((item) => item.id !== id)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) {
      setFetchError(result)
    }
  }
  const handleDelete = async (id) => {
    const listItem = items.filter((item) => item.id !== id)
    setItems(listItem)
    const deleteOptions = {
      method: 'DELETE',
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) {
      setFetchError(result)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }
  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem />
      <main>
        {isLoading && <p>Loading Items</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer amount={items.length} />
    </div>
  )
}

export default Tut1
