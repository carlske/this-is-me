import ButtonLink from "../ButtonLink/ButtonLink"
import Chip from "../Chip/Chip"
import ChipList from "../ChipList/ChipList"

interface CardProps {
    children: React.ReactNode
    company: String
    date: String
    skills: String
    id: string
    url: string | undefined

}

const Card = ({ children, date, company, skills, id, url }: CardProps) => {
    return <article className="card">
        <div className="text-wasabi font-bold text-xl">
            {children}
        </div>
        <section className="card--content">
            <div className="text-xs flex flex-col">
                <span>{company}</span>
                <span>{date}</span>
            </div>
            <div className="h-[3px] w-full  mt-4 opacity-10 bg-wasabi"></div>

            <div className="mt-4 p-2 text-xs">
                <p>I work with developers from many countries Canada, France, Ukraine, Egypt, etc. I work doing Frontend, Php and Python solutions</p>
            </div>
        </section>

        <section className="mt-7 " aria-label="Habilidades">
            <ChipList skills={skills.split(',')} />
        </section>
        <div className="h-[3px] w-full mt-4 opacity-10 bg-wasabi"></div>

        <div className="flex flex-row justify-around mt-5">
            <ButtonLink link={`./experience/${id}`} type="secundary">Ver mas</ButtonLink>
        </div>

    </article>
}

export default Card