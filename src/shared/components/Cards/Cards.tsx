import { ChipList } from "../Chips/Chips"
import { LinkSecundary } from "../Links/Links"

interface CardBaseProps {
    skills: String
    url: string | undefined
    linkText: string
    title: string
    children: React.ReactNode
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



const Card = ({ children, skills, url, linkText, title }: CardBaseProps) => {
    return <article
        className="card p-4 rounded bg-rice  dark:bg-industrial border border-transparent border-r-[3px] border-r-matcha border-l-[3px] border-l-matcha hover:border-l-[3px] hover:border-r-[3px] hover:border-l-core-pink hover:border-r-core-pink"
    >
        <header className="mb-2">
            <h2 className="dark:text-wasabi text-matcha font-bold text-xl">
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
            <LinkSecundary link={url} >{linkText}</LinkSecundary>
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

    const dateExperience :string = startDate.concat(',', finishDate)
    
    return <Card
        skills={skills}
        url={link}
        title={title}
        linkText="Ver mas"
    >
        <div className="mt-4 p-1">
            <p>I work with developers from many countries Canada, France, Ukraine, Egypt, etc. I work doing Frontend, Php and Python solutions</p>
        </div>
    </Card>

}