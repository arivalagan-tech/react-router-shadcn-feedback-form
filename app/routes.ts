import { route, index } from "@react-router/dev/routes"

export default [
  index("routes/index.tsx"),
  route("feedback", "routes/feedback.tsx"),
  route("contact", "routes/contact.tsx"),
  route("blogs", "routes/blogs.tsx"),
  route("blogs/:id", "routes/blogs.$id.tsx"),
]
