import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import "../styles/form.css"

export default function Blogs() {

  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://nems-api.roundlogics.com/api/blogs?populate=*")
      .then(res => res.json())
      .then(data => {
        setBlogs(data.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="blogs-container">

      <h1 className="blogs-title">Blogs</h1>

      <div className="blogs-grid">
        {blogs.map((blog: any) => (
            


          <div key={blog.id} className="blog-card" onClick={() => navigate(`/blogs/${blog.documentId}`) }>

            <h2 className="blog-title">{blog.Cover_Title}</h2>

            <p className="blog-author">By {blog.Author_Name}</p>

            <p className="blog-content">
              {blog.Content}
            </p>

          </div>


        ))}
      </div>

    </div>
  )
}