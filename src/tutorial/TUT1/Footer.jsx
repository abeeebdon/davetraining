const Footer = ({ amount }) => {
  const today = new Date()
  return (
    <footer>
      <p style={{ color: 'white' }}>
        {amount}
        {amount === 1 ? 'List item' : 'List items'}
      </p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}
export default Footer
