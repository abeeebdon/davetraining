const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <main className="new-post">
      <h2>NewPost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle" className="label">
          Title:
        </label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          required
          onChange={(e) => setPostTitle(e.target.value)}
          className="input"
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </main>
  )
}
export default NewPost
