import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useBlog } from "../context/BlogContext"

import "../styles/form.css"


export default function Blogs() {
  const { blogs, setBlogs, setActiveBlog } = useBlog()
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://nems-api.roundlogics.com/api/blogs?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Blogs</h1>

      <div className="blogs-grid">
        {blogs.map((blog: any) => (
          <div
            key={blog.id}
            className="blog-card group"
            onClick={() => {
              setActiveBlog(blog) //  store in Context
              navigate(`/blogs/${blog.id}`) // clean URL
            }}
          >
            {/*  IMAGE */}
            <img
              src={`https://nems-api.roundlogics.com${blog.Cover_Picture?.url}`}
              alt={blog.Cover_Title}
              className="blog-image"
            />

            <div className="blog-content-wrapper">
              {/*  TITLE */}
              <h2 className="blog-title">{blog.Cover_Title}</h2>

              {/*  AUTHOR */}
              <p className="blog-author">By {blog.Author_Name}</p>

              {/*  DATE */}
              <p className="blog-date">
                {new Date(blog.publishedAt).toDateString()}
              </p>

              {/*  CATEGORY */}
              <div className="blog-category-container">
                {blog.blog_categories.map((cat: any) => (
                  <span key={cat.id} className="blog-category">
                    {cat.Blog_Category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
