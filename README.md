
🕵️ Secret Courier App [(https://secretcourier.onrender.com/)](url)
A secure and stylish anonymous messaging platform built with Next.js, shadcn/ui, and Resend. Visitors can send secret messages, and the app owner can view them securely via an authenticated dashboard.

🚀 Features
💬 Anonymous message submission

🔐 Secure signup/signin system (for owner)

📩 Email notifications using Resend

🧠 Debounced input to prevent unnecessary backend calls

🎨 Elegant, accessible UI with shadcn/ui

📱 Mobile-responsive layout

🔒 Protected dashboard for viewing received messages

🛠 Tech Stack
Frontend: Next.js 14+ (App Router)

UI Components: shadcn/ui (Radix + Tailwind)

Email Service: Resend (transactional email)

Database: MongoDB (Mongoose/Prisma)

Auth: NextAuth.js or Custom JWT

Styling: Tailwind CSS

📄 Pages Overview
Route	Description
/send-message	Public anonymous message form
/signin	Sign in for admin/owner
/signup	Sign up (typically restricted to owner)
/dashboard	Protected dashboard to view messages

📦 Installation
bash
Copy
Edit
git clone https://github.com/yourusername/secret-courier-app.git
cd secret-courier-app
npm install
⚙️ Environment Variables
Create a .env.local in the root:

env
Copy
Edit
MONGODB_URI=your_mongo_connection_string
NEXTAUTH_SECRET=your_random_secret
RESEND_API_KEY=your_resend_api_key

✉️ Email Notifications
Using Resend, messages submitted via /send-message are emailed to the owner instantly.

Message sender form is debounced using lodash.debounce or a custom hook.

You’ll receive an email via Resend with the message content.


🎨 UI Preview
Components styled with shadcn/ui:

Input, Textarea, Card, Button, Alert, etc.

Modern, accessible, and consistent styling out of the box.

🧑‍💼 Admin Workflow
Signup → /signup (only once)

Login → /signin

Dashboard → /dashboard

View, delete, or archive received messages

✨ Future Add-ons
Message replies via email

Rate limiting or reCAPTCHA

Expiring messages

Dark mode

🧪 Dev Scripts
bash
Copy
Edit
npm run dev       # Start local dev server
npm run build     # Build for production
📄 License
Licensed under the MIT License.

