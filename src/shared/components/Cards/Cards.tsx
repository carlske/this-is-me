import { isValidElement, useEffect, useRef, useState } from 'react'
import { AccentHeadingSubheading } from '../AccentHeading/AccentHeading'
import { ChipList } from '../Chips/Chips'
import { Link } from '../Links/Links'
import { Calendar, MapPin, ExternalLink, ChevronUp, ChevronDown, FolderOpen } from 'lucide-react'

type TypeCardVariant = 'experience' | 'project'

interface CardBaseProps {
  skills: Record<string, string>
  url: string | undefined
  startDate?: string
  finishDate?: string
  linkText: string
  title: string
  location?: string
  company?: string
  children: React.ReactNode
  typeCard: TypeCardVariant
}

interface CardExperienceProps {
  children: React.ReactNode
  company: string
  startDate: string
  finishDate: string
  location?: string
  skills: Record<string, string>
  pageId: string | undefined
  position: string
}

interface CardProjectProps {
  children: React.ReactNode
  title: string
  skills: Record<string, string>
  url: string | undefined
}

const Card = ({
  finishDate,
  startDate,
  children,
  skills,
  url,
  linkText,
  title,
  company,
  location,
  typeCard,
}: CardBaseProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const expandedContentRef = useRef<HTMLDivElement>(null)

  const maxLength: number = 100

  let description: string = ''

  if (typeof children === 'string') {
    description = children.trim().replace(/<\/?p>/g, '')
  }
  // if children is from astro, it will be a object
  if (isValidElement(children)) {
    const value = (children.props as { value: string }).value
    description = value.trim().replace(/<\/?p>/g, '')
  }

  useEffect(() => {
    if (contentRef.current && expandedContentRef.current) {
      const contentHeight = contentRef.current.scrollHeight
      expandedContentRef.current.style.maxHeight = isExpanded ? `${contentHeight}px` : '0px'
    }
  }, [isExpanded])

  const truncateText = (text: string, maxLength = 100) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  const isShowMoreInforButton = (description: string, maxLength: number) => {
    return description.length > maxLength
  }

  return (
    <>
      <article className="card bg-industrial w-full rounded border border-transparent duration-300 hover:-translate-y-1.5">
        <div className="bg-wasabi absolute h-[50px] w-[3px]">
          <div className="a after:bg-wasabi after:absolute after:h-[3px] after:w-[60px] after:content-['']"></div>
        </div>

        <div className="p-6">
          <header className="mb-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="animate-in fade-in-0 slide-in-from-left-4 flex-1 duration-500">
                <AccentHeadingSubheading color="wasabi" animation="false" position="baseline">
                  {title}
                </AccentHeadingSubheading>
              </div>
              {startDate && (
                <div className="text-rice flex w-fit items-center rounded-full bg-gray-300 p-1 px-3 py-1 text-xs dark:bg-neutral-700">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {startDate} - {finishDate ?? 'Actual'}
                  </span>
                </div>
              )}
            </div>
          </header>
          {location && (
            <section className="text-rice m-1 flex items-center gap-2 text-xs">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </section>
          )}
          <section className="text-rice text-ms">
            {company && (
              <>
                <div className="m-2 flex flex-col text-xs">{company}</div>
                <div className="bg-wasabi mt-4 h-[3px] w-full opacity-10"></div>
              </>
            )}
            <div className="mt-2 p-1">
              {!isExpanded ? truncateText(description, maxLength) : description}
            </div>
            {isShowMoreInforButton(description, maxLength) && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-rice hover:text-primary/80 mt-2 flex cursor-pointer items-center gap-1 text-sm font-medium transition-all duration-200 hover:gap-2"
                aria-expanded={isExpanded}
                aria-label={isExpanded ? 'Mostrar menos contenido' : 'Mostrar más contenido'}
              >
                {isExpanded ? (
                  <>
                    <span>Mostrar menos</span>
                    <ChevronUp className="h-4 w-4 transition-transform duration-300" />
                  </>
                ) : (
                  <>
                    <span>Mostrar más</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                  </>
                )}
              </button>
            )}
          </section>
          <section className="mt-5 flex flex-row flex-wrap gap-2 p-1">
            <ChipList skills={skills} />
          </section>
          <section className="mt-5 flex">
            <Link
              variant="secondary"
              className="hover:scale-10 transition-all duration-200"
              target={typeCard === 'experience' ? '_self' : '_blank'}
              ariaLabel={`Conoce mas acerca mi experiencia como de ${title} `}
              href={url}
            >
              <div className="flex items-center gap-1">
                {typeCard === 'experience' ? (
                  <FolderOpen className="h-3 w-3" />
                ) : (
                  <ExternalLink className="h-3 w-3" />
                )}
                {linkText}
              </div>
            </Link>
          </section>
        </div>
        <div className="bg-wasabi absolute right-0 mt-[-3.8em] h-[60px] w-[3px] rotate-180 transform">
          <div className="after:bg-wasabi after:absolute after:h-[3px] after:w-[60px] after:content-['']"></div>
        </div>
      </article>
    </>
  )
}

export const CardExperience = ({ pageId, children, position, ...props }: CardExperienceProps) => {
  const urlPage = `./experience/${pageId}`

  return (
    <Card
      {...props}
      url={urlPage}
      title={position}
      linkText="Conoce los proqyectos"
      typeCard="experience"
    >
      {children}
    </Card>
  )
}

export const CardProject = ({ children, ...props }: CardProjectProps) => {
  console.log('CardProject props:', children)
  return (
    <Card {...props} linkText="Ver mas" typeCard="project">
      {children}
    </Card>
  )
}
