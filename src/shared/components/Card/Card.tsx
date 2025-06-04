
interface CardProps  {
    children: React.ReactNode
}

const Card = ({children} : CardProps) => {
    return <div className="card">
        <div className="card--name">
            {children}
        </div>
        <div></div>
        <div className="card--content">
            <div className="text-xs flex flex-col">
                <span>Decathlon Mexico · Jornada completa</span>  
                <span>ene. 2021 - actualidad</span>
            </div>
            <div className="mt-4 text-sm">
                <p>I work with developers from many countries Canada, France, Ukraine, Egypt, etc. I work doing Frontend, Php and Python solutions</p>
            </div>
        </div>
        <div className="">
            <a>Conocer Proyecto</a>
        </div>
        
    </div>
}

export default Card