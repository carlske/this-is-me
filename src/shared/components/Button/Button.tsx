interface ButtonProps  {
    children: React.ReactNode
    type: 'primary' | 'secundary'
}

const Button = ({children, type}: ButtonProps) => {
    return <button className={`${type === 'primary' ? 'primary' : 'secundary' }`}>
    <span className="text">{children}</span>
  </button>
}



export default Button;