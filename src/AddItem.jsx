import { FaPlus } from 'react-icons/fa'
const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Enter item name..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  )
}
export default AddItem
