import { defineCollection, z } from 'astro:content'

const techStackSchema = z.object({
  type: z.string(),
  stack: z.array(z.string()),
})

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tech: z.array(techStackSchema),
  link: z.string().url().optional(),
  private: z.boolean().optional(),
})

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    position: z.string(),
    company: z.string(),
    employment_type: z.string(),
    start_date: z.string(),
    end_date: z.string().nullable(),
    duration: z.string(),
    location: z.string(),
    website: z.string().url(),

    tech: z.array(techStackSchema),

    projects: z.array(projectSchema),
  }),
})

// Exportar la(s) colección(es)
export const collections = {
  experiences: experienceCollection,
}
