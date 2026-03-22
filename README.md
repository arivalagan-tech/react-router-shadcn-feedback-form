🚀 Full-Stack React App — Feedback + Blog System

A modern full-stack web application built using React Router v7, TypeScript, shadcn/ui, and Tailwind CSS.
This project combines a feedback form with Google Sheets integration and a dynamic blog system powered by CMS APIs, along with advanced client-side state management using Context API.

---

🌐 Live Demo

👉 https://react-router-shadcn-feedback-form.vercel.app/

---

✨ Features

📝 Feedback System

- User feedback form
- Data stored in Google Sheets via Google Apps Script
- Form validation with error handling
- Loading state during submission
- Success popup notification

📰 Blog System (CMS Integration)

- Fetch blog data from external CMS API
- Dynamic blog listing page
- Individual blog detail page
- Clean routing ("/blogs/:id")
- API-based content rendering

🧠 State Management

- Global state using React Context API
- Avoids prop drilling
- Instant data access across pages
- Fallback API strategy for reliability

⚡ Performance & UX

- Client-side routing with React Router
- Optimized data fetching
- Clean and responsive UI
- Modular and scalable architecture

---

🛠 Tech Stack

- Frontend: React Router v7, TypeScript
- UI: shadcn/ui, Tailwind CSS
- State Management: Context API
- Backend (POC): Google Apps Script + Google Sheets
- CMS API: External REST API (Strapi-based)
- Build Tool: Vite
- Deployment: Vercel (CI/CD enabled)

---

🏗 Project Architecture

app
 ├ components
 │   ├ layout
 │   └ ui
 ├ context
 │   └ BlogContext.tsx
 ├ routes
 │   ├ index.tsx
 │   ├ feedback.tsx
 │   ├ contact.tsx
 │   ├ blogs.tsx
 │   └ blogs.$id.tsx
 ├ styles
 └ root.tsx

---

⚙️ Installation

1️⃣ Clone the repository

git clone https://github.com/arivalagan-tech/react-router-shadcn-feedback-form.git

2️⃣ Navigate into the project

cd react-router-shadcn-feedback-form

3️⃣ Install dependencies

npm install

4️⃣ Run development server

npm run dev

---

🔗 API Endpoints Used

Blog List

https://nems-api.roundlogics.com/api/blogs?populate=*

Blog Detail

https://nems-api.roundlogics.com/api/blogs/:id?populate=*

Blog Categories

https://nems-api.roundlogics.com/api/blog-categories?populate=*

---

🔄 CI/CD Workflow

This project uses automatic deployment via Vercel:

Code Change → git push → GitHub → Vercel → Auto Deploy 🚀

---

📌 Key Concepts Implemented

- React Router dynamic routing
- Context API for global state
- API integration with CMS
- Google Sheets as backend (POC)
- Clean URL architecture
- Fallback data fetching strategy

---

📈 Future Enhancements

- 🔍 Blog search functionality
- 🏷 Category-based filtering
- 📄 Pagination
- 🔗 SEO-friendly URLs (slug-based)
- 🎬 Advanced animations (GSAP)

---

🤝 Contributing

Feel free to fork this project and improve it. Contributions are welcome!

---

📜 License

This project is open-source and available under the MIT License.

---
