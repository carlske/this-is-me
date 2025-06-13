interface ButtonProps {
  children: React.ReactNode
  type: 'primary' | 'secundary'
  link: string | undefined;
}

const ButtonLink = ({ children, type, link }: ButtonProps) => {
  return  <a href={link} className={`button ${type === 'primary' ? 'primary' : 'secundary'}`}>
    {children}
  </a> 
}



export default ButtonLink;