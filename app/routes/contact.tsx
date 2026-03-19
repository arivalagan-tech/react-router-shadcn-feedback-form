import { useState, useEffect } from "react"

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  // ✅ Auto clear message after 3 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [status])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setStatus("Submitting...")

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzMeu-CjYcsVc6W_bzI-jdrFwL0Ag32zpw6JhLFmRCu0ZT_cXqbo3AuAMqvJrTe59tjJg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      setStatus("✅ Data sent to Google Sheet")

      setFormData({
        name: "",
        email: "",
        message: ""
      })

    } catch (error) {
      console.error(error)
      setStatus("❌ Error sending data")
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="contact-container">

      <Card className="contact-card">

        <CardHeader>
          <CardTitle>Contact Form (Google Sheets)</CardTitle>
        </CardHeader>

        <CardContent>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <Label>Name</Label>
              <Input
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <Label>Message</Label>
              <Textarea
                name="message"
                placeholder="What's on your mind today?"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>

          </form>

          {status && (
            <p className={status.includes("Error") ? "status-error" : "status-text"}>
              {status}
            </p>
          )}

        </CardContent>

      </Card>

    </div>
  )
}