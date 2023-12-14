interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const IconButton = ({children, ...props}: IconButtonProps) => {
  return (
    <button className="p-2" {...props} >
        {children}
    </button>
  )
}
export default IconButton