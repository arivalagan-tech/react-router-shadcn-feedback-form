import { useActionData, useNavigation } from "react-router"
import { useRef, useState, useEffect } from "react"

import "../styles/form.css"

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"



export async function action({ request }) {
  const formData = await request.formData()

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  const errors = {}

  if (!name) {
    errors.name = "Name is required"
  }

  if (!email) {
    errors.email = "Email is required"
  }

  if (!message) {
    errors.message = "Message is required"
  }

  if (Object.keys(errors).length > 0) {
    return { errors }
  }

  console.log("Feedback received:", {
    name,
    email,
    message,
  })

  return { success: true }
}



export default function Feedback() {

  const actionData = useActionData()
  const navigation = useNavigation()

  const formRef = useRef(null)

  const [showPopup, setShowPopup] = useState(false)

  const isSubmitting = navigation.state === "submitting"


  useEffect(() => {

    if (actionData?.success) {

      setShowPopup(true)

      if (formRef.current) {
        formRef.current.reset()
      }

    }

  }, [actionData])


  return (
    <div className="feedback-container">

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">

            <h2 className="popup-title">
              User Feedback
            </h2>

            <p className="popup-text">
              ✅ Thank you! Your feedback has been submitted.
            </p>

            <button
              className="popup-button"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>

          </div>
        </div>
      )}



      <Card>

        <CardHeader>
          <CardTitle>User Feedback</CardTitle>
        </CardHeader>

        <CardContent>

          <form method="post" ref={formRef}>

            <div className="form-group">

              <Label htmlFor="name">Name</Label>

              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />

              {actionData?.errors?.name && (
                <p className="form-error">
                  {actionData.errors.name}
                </p>
              )}

            </div>


            <div className="form-group">

              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />

              {actionData?.errors?.email && (
                <p className="form-error">
                  {actionData.errors.email}
                </p>
              )}

            </div>


            <div className="form-group">

              <Label htmlFor="message">Message</Label>

              <Textarea
                id="message"
                name="message"
                placeholder="Write your feedback..."
                required
              />

              {actionData?.errors?.message && (
                <p className="form-error">
                  {actionData.errors.message}
                </p>
              )}

            </div>


            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </Button>

          </form>

        </CardContent>

      </Card>

    </div>
  )
}