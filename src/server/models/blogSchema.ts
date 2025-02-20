import { z } from '@hono/zod-openapi'

export const UserSchema = z.object({
  name: z.string().nullable().openapi({ example: 'Ryota' }),
  image: z.string().nullable().openapi({ example: 'https://example.com/image.png' }),
})

export const BlogSchema = z.object({
  id: z.number().openapi({ example: 1 }),
  title: z.string().openapi({ example: 'Hello World' }),
  content: z.string().openapi({ example: 'This is a blog post' }),
  createdAt: z.string().datetime().openapi({ example: '2025-01-01T00:00:00Z' }),
  userId: z.string().openapi({ example: 'xxxxxx' }),
  user: UserSchema,
})

export const BlogsSchema = z.array(BlogSchema)

export const BlogIdSchema = z.object({
  id: z.string().openapi({ example: '1' }),
})

export const CreateBlogSchema = z.object({
  title: z.string().min(1, { message: 'Title is required'}).openapi({ example: 'Hello World' }),
  content: z.string().min(1, { message: 'Content is required' }).openapi({ example: 'This is a blog post' }),
})

export type User = z.infer<typeof UserSchema>
export type Blog = z.infer<typeof BlogSchema>
export type CreateBlog = z.infer<typeof CreateBlogSchema>
