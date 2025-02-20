import { createRoute, z } from '@hono/zod-openapi'
import { BlogIdSchema, BlogSchema, BlogsSchema, CreateBlogSchema } from '../models/blogSchema'

export const getBlogRoute = createRoute({
  path: '/',
  method: 'get',
  description: '全てのブログを取得',
  responses: {
    200: {
      description: '取得成功',
      content: {
        'application/json': { schema: BlogsSchema },
      }
    }
  }
})

export const getBlogByIdRoute = createRoute({
  path: '/{id}',
  method: 'get',
  description: '特定のブログを取得',
  request: { params: BlogIdSchema },
  responses: {
    200: {
      description: '取得成功',
      content: {
        'application/json': { schema: BlogSchema },
      }
    },
    404: {
      description: 'ブログが見つかりませんでした',
      content: {
        'application/json': { schema: z.null() },
      }
    }
  }
})

export const createBlogRoute = createRoute({
  path: '/',
  method: 'post',
  description: 'ブログを作成',
  request: {
    body: {
      content: {
        'application/json': { schema: CreateBlogSchema }, 
      }
    }
  },
  responses: {
    201: {
      description: '作成成功',
      content: {
        'application/json': { schema: BlogSchema },
      }
    }
  }
})
