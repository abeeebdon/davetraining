import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <div className="missing">
      <h2>Page Not Found</h2>
      <p>Well, that's disappointing</p>
      <p>
        <Link to="/">Visit our Homepage</Link>
      </p>
    </div>
  )
}
export default Missing
