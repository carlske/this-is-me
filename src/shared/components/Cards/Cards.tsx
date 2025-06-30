import { ChipList } from "../Chips/Chips"
import { Link } from "../Links/Links"

type TypeCardVariant = 'experience' | 'project'

interface CardBaseProps {
    skills: String
    url: string | undefined
    linkText: string
    title: string
    children: React.ReactNode
    typeCard: TypeCardVariant
}


interface CardExperienceProps {
    company: string
    startDate: string
    finishDate: string
    skills: string
    pageId: string | undefined
    position: string
}

interface CardProjectProps {
    title: string
    startDate: string
    finishDate: string
    skills: string
    link: string | undefined
}



const Card = ({ children, skills, url, linkText, title, typeCard }: CardBaseProps) => {
    return <article
        className="card p-4 rounded bg-wasabi opacity-100  dark:bg-industrial border border-transparent border-r-[3px] border-r-matcha border-l-[3px] border-l-matcha hover:border-l-[3px] hover:border-r-[3px] hover:border-l-core-pink hover:border-r-core-pink"
    >
        <header className="mb-2">
            <h2 className="dark:text-wasabi text-rice font-bold text-xl">
                {title}
            </h2>
        </header>

        <div className="h-[3px] w-full mt-4 opacity-10 dark:bg-wasabi bg-industrial "></div>

        <section className="mt-4 p-2 text-sm text-shadow-deep-black dark:text-rice">
            {children}
        </section>

        <section className="mt-1 p-1">
            <ChipList skills={skills.split(',')} />
        </section>

        <div className="h-[3px] w-full mt-4 opacity-10 dark:bg-wasabi bg-industrial "></div>


        <section className="flex flex-row justify-around mt-5">
            <Link variant="secondary" target={typeCard === 'experience' ? '_self' : '_blank'}
                ariaLabel={`Conoce mas acerca mi experiencia como de ${title} `} href={url} >{linkText}</Link>
        </section>
    </article>

}



export const CardExperience = ({ startDate, finishDate, company, skills, pageId, position }: CardExperienceProps) => {

    const dateExperience = startDate.concat(',', finishDate)

    const urlPage = `./experience/${pageId}`

    return <Card
        skills={skills}
        url={urlPage}
        title={position}
        linkText="Ver mas"
        typeCard="experience"
    >
        <div className="text-xs flex flex-col">
            <span>{company}</span>
            <span>{dateExperience}</span>
        </div>
        <div className="h-[3px] w-full mt-4 opacity-10 dark:bg-wasabi bg-industrial "></div>

        <div className="mt-4 p-1">
            <p>I work with developers from many countries Canada, France, Ukraine, Egypt, etc. I work doing Frontend, Php and Python solutions</p>
        </div>
    </Card>

}


export const CardProject = ({ startDate, finishDate, title, skills, link }: CardProjectProps) => {

    const dateExperience: string = startDate.concat(',', finishDate)

    return <Card
        skills={skills}
        url={link}
        title={title}
        linkText="Ver mas"
        typeCard="project"
    >
        <div className="mt-4 p-1">
            <p>I work with developers from many countries Canada, France, Ukraine, Egypt, etc. I work doing Frontend, Php and Python solutions</p>
        </div>
    </Card>

}