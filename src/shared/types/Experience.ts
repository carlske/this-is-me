type TechStrings = {
  frontend: string[]
  backend: string[]
  otros: string[]
}

export interface Project {
  title: string
  description: string
  tech: Partial<Record<keyof TechStrings, string[]>>[]
  link: string
  private?: boolean
}

export interface ExperienceData {
  id: string
  position: string
  company: string
  employment_type: string
  start_date: string
  end_date: string | null
  duration: string
  location: string
  website: string
  tech: Record<string, string>
  projects: Project[]
}

export interface Experience {
  id: string
  data: ExperienceData
}
