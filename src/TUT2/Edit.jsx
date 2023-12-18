import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
const Edit = ({
  posts,
  handleEdit,
  editBody,
  editTitle,
  setEditBody,
  setEditTitle,
}) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)

  useEffect(() => {
    if (post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  }, [post, setEditBody, setEditTitle])

  return (
    <main className="new-post">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm">
            <label htmlFor="postTitle" className="label">
              Title:
            </label>
            <input
              type="text"
              id="postTitle"
              value={editTitle}
              required
              onChange={(e) => setEditTitle(e.target.value)}
              className="input"
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button
              type="submit"
              className="submit"
              onClick={() => handleEdit(post.id)}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </main>
  )
  {
    !editTitle && (
      <>
        <h2>Post not found</h2>
        <p>Well, that's disappointing</p>
        <p>
          <Link to="/">Visit our Homepage</Link>
        </p>
      </>
    )
  }
}
export default Edit
