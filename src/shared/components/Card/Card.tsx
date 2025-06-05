import Button from "../Button/Button"

interface CardProps {
    children: React.ReactNode
    company: String
    date: String
    skills: String
}

const Card = ({ children, date, company, skills }: CardProps) => {
    return <div className="card">
        <div className="card--name">
            {children}
        </div>
        <div className="card--content">
            <div className="text-xs flex flex-col">
                <span>{company}</span>
                <span>{date}</span>
            </div>
            <div className="h-[3px] w-full  mt-4 opacity-10 bg-wasabi"></div>

            <div className="mt-4 p-2 text-xs">

                <p>I work with developers from many countries Canada, France, Ukraine, Egypt, etc. I work doing Frontend, Php and Python solutions</p>
            </div>
        </div>

        <div className="mt-7 ">
            {skills.split(',').map(skill => {
                return <span className="bg-core-pink text-rice font-bold rounded-lg p-2 mr-1.5 text-xs " key={skill}>{skill}</span>;
            })}
        </div>
        <div className="h-[3px] w-full mt-4 opacity-10 bg-wasabi"></div>

        <div className="flex flex-row justify-around mt-5">
        <Button type="secundary">Ver mas</Button>
        <Button type="primary">Visitar</Button>
        </div>

    </div>
}

export default Card