import { ChipList } from '../Chips/Chips'
import { Link } from '../Links/Links'

type TypeCardVariant = 'experience' | 'project'

interface CardBaseProps {
  skills: Record<string, string>
  url: string | undefined
  linkText: string
  title: string
  children: React.ReactNode
  typeCard: TypeCardVariant
}

interface CardExperienceProps {
  children: React.ReactNode
  company: string
  startDate: string
  finishDate: string
  skills: Record<string, string>
  pageId: string | undefined
  position: string
}

interface CardProjectProps {
  children: React.ReactNode
  title: string
  skills: Record<string, string>
  link: string | undefined
}

const Card = ({ children, skills, url, linkText, title, typeCard }: CardBaseProps) => {
  return (
    <article className="card bg-wasabi dark:bg-industrial rounded border border-transparent p-4 opacity-100">
      <header className="mb-2">
        <h2 className="dark:text-wasabi text-rice text-xl font-bold">{title}</h2>
      </header>

      <div className="dark:bg-wasabi bg-industrial mt-4 h-[3px] w-full opacity-10"></div>

      <section className="text-industrial dark:text-rice mt-4 p-2 text-sm">{children}</section>

      <section className="mt-1 flex flex-row flex-wrap gap-2 p-1">
        <ChipList skills={skills} />
      </section>

      <div className="dark:bg-wasabi bg-industrial mt-4 h-[3px] w-full opacity-10"></div>

      <section className="mt-5 flex flex-row justify-around">
        <Link
          variant="secondary"
          target={typeCard === 'experience' ? '_self' : '_blank'}
          ariaLabel={`Conoce mas acerca mi experiencia como de ${title} `}
          href={url}
        >
          {linkText}
        </Link>
      </section>
    </article>
  )
}

export const CardExperience = ({
  children,
  startDate,
  finishDate,
  company,
  skills,
  pageId,
  position,
}: CardExperienceProps) => {
  const dateExperience = startDate.concat(',', finishDate)

  const urlPage = `./experience/${pageId}`

  return (
    <Card skills={skills} url={urlPage} title={position} linkText="Ver mas" typeCard="experience">
      <div className="flex flex-col text-xs">
        <span>{company}</span>
        <span>{dateExperience}</span>
      </div>
      <div className="dark:bg-wasabi bg-industrial mt-4 h-[3px] w-full opacity-10"></div>

      <div className="mt-4 p-1">{children}</div>
    </Card>
  )
}

export const CardProject = ({ children, title, skills, link }: CardProjectProps) => {
  return (
    <Card skills={skills} url={link} title={title} linkText="Ver mas" typeCard="project">
      <div className="mt-4 p-1">{children}</div>
    </Card>
  )
}
