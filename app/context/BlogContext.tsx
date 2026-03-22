import { createContext, useContext, useState } from "react"


type Blog = {
  id: number
  documentId: string
  Cover_Title: string
  Author_Name: string
  Content: string
}

//  Context structure
type BlogContextType = {
  blogs: Blog[]
  setBlogs: (blogs: Blog[]) => void
  activeBlog: Blog | null
  setActiveBlog: (blog: Blog | null) => void
}

//  Create Context
const BlogContext = createContext<BlogContextType | null>(null)

//  Provider
export function BlogProvider({ children }: { children: React.ReactNode }) {

  //  Global state
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null)

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, activeBlog, setActiveBlog }}>
      {children}
    </BlogContext.Provider>
  )
}

//  Custom hook (easy usage)
export function useBlog() {
  const context = useContext(BlogContext)

  if (!context) {
    throw new Error("useBlog must be used inside BlogProvider")
  }

  return context
}