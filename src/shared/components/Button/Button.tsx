interface ButtonProps  {
    children: React.ReactNode
}

const Button = ({children}: ButtonProps) => {
    return <button className="bubbles">
    <span className="text">{children}</span>
  </button>
}



export default Button;