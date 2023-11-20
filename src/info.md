#

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

# Explanation

# p2

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

# explanation2
