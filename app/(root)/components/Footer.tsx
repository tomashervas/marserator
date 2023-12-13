const Footer = () => {
  return (
    <div className="flex flex-col items-center p-2">
      <p>Marserator</p>
      <p className="text-xs">Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  )
}
export default Footer