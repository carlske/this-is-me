import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  type: "content",
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
    skills: z.array(z.string()),
    projects: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        tech: z.array(z.string()),
        link: z.string().url().optional(),
        private: z.boolean().optional()
      })
    )
  })
});

export const collections = {
  experiences: experienceCollection,
};
