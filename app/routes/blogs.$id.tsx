import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useBlog } from "../context/BlogContext"

import "../styles/form.css"

export default function BlogDetail() {
  const { id } = useParams()
  const { activeBlog, setActiveBlog } = useBlog()

  const [blog, setBlog] = useState<any>(activeBlog)

  useEffect(() => {
    // ✅ If context empty → fallback API call
    if (!activeBlog && id) {
      fetch(`https://nems-api.roundlogics.com/api/blogs/${id}?populate=*`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data.data)
          setActiveBlog(data.data) // store again in context
        })
        .catch((err) => console.error(err))
    }
  }, [id, activeBlog, setActiveBlog])

  // ✅ if blog still empty
  if (!blog) {
    return <p>Loading...</p>
  }

  return (
    <div className="blog-detail-container">
      <h1 className="blog-detail-title">{blog.Cover_Title}</h1>

      <p className="blog-detail-author">By {blog.Author_Name}</p>

      <p className="blog-detail-content">{blog.Content}</p>
    </div>
  )
}
