import { hono } from '@/lib/hono'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const res = await hono.api.blogs.$get()
  const blogs = await res.json()

  if (blogs.length === 0) { return <div>まだ投稿がありません</div> }

  return (
   <div>
    {blogs.map((blog) => (
      <div key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <Image
          src={blog.user.image as string}
          alt={blog.user.name!}
          width={28}
          height={28}
        />
      </div>
    ))}
   </div>
  );
}
