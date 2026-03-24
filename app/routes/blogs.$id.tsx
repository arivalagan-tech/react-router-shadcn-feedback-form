import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useBlog } from "../context/BlogContext"

import "../styles/form.css"
import { renderMDtext } from "../utils/textUtils"

export default function BlogDetail() {
  const { id } = useParams()
  const { activeBlog, setActiveBlog } = useBlog()
  console.log("Active blog:", activeBlog)

  const [blog, setBlog] = useState<any>(activeBlog)
  console.log("Final blog state:", blog)

  useEffect(() => {
    // ✅ If context empty → fallback API call
    if (!activeBlog && id) {
      fetch(`https://nems-api.roundlogics.com/api/blogs/${blog.Cover_Title}?populate=*`)
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
    return <p className="mt-10 text-center">Loading...</p>
  }

  return (
    <div className="blog-detail-container">
      {/*  IMAGE */}
      <img
        src={`https://nems-api.roundlogics.com${blog.Cover_Picture?.url}`}
        alt={blog.Cover_Title}
        className="blog-detail-image"
      />

      <div className="blog-detail-content">
        {/*  TITLE */}
        <h1 className="blog-detail-title">{blog.Cover_Title}</h1>

        {/*  AUTHOR + DATE */}
        <div className="blog-detail-meta">
          <span>By {blog.Author_Name}</span>
          <span>{new Date(blog.publishedAt).toDateString()}</span>
        </div>

        {/*  CATEGORY */}
        <div className="blog-category-container">
          {blog.blog_categories.map((cat: any) => (
            <span key={cat.id} className="blog-category">
              {cat.Blog_Category}
            </span>
          ))}
        </div>

        {/*  CONTENT */}
        
        <p className="blog-detail-text">{renderMDtext(blog.Content)}</p>
      </div>
    </div>
  )
}
