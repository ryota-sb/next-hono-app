import { OpenAPIHono } from "@hono/zod-openapi"
import { createBlogRoute, getBlogByIdRoute, getBlogsRoute } from "@/server/routes/blogRoutes"
import { getBlogsHandler } from "@/server/controllers/getBlogs"
import { getBlogByIdHandler } from "@/server/controllers/getBlogById"
import { createBlogHandler } from "@/server/controllers/createBlog"
import { swaggerUI } from "@hono/swagger-ui"
import { basicAuth } from "hono/basic-auth"

export const app = new OpenAPIHono()

const blogApp = new OpenAPIHono()
  .openapi(getBlogsRoute, getBlogsHandler)
  .openapi(getBlogByIdRoute, getBlogByIdHandler)
  .openapi(createBlogRoute, createBlogHandler)

const route = app.route("/api/blogs", blogApp)

app.doc("/api/specification", {
  openapi: "3.0.0",
  info: { title: "NextHonoApp API", version: "1.0.0" },
}).use('/api/doc/*', async (c, next) => {
  const auth = basicAuth({
    username: "admin",
    password: "admin",
  })

  return auth(c, next)
}).get("/api/doc", swaggerUI({ url: "/api/specification" }))

export type AppType = typeof route
export default app
