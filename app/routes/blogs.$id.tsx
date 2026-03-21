import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function BlogDetail() {

  const { id } = useParams() // ✅ get documentId from URL
  const [blog, setBlog] = useState<any>(null)

  useEffect(() => {
    if (!id) return

    fetch(`https://nems-api.roundlogics.com/api/blogs/${id}?populate=*`)
      .then(res => res.json())
      .then(data => {
        setBlog(data.data)
      })
      .catch(err => console.error(err))

  }, [id])

  if (!blog) {
    return <p>Loading...</p>
  }

  return (
    <div className="blog-detail-container">

      <h1 className="blog-detail-title">
        {blog.Cover_Title}
      </h1>

      <p className="blog-detail-author">
        By {blog.Author_Name}
      </p>

      <p className="blog-detail-content">
        {blog.Content}
      </p>

    </div>
  )
}