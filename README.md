# 🛡️ InsureAI – AI Powered Insurance Portal

> An intelligent insurance dashboard that uses **AI-powered natural language search** to help users find providers and claims instantly.

🌐 **Live Demo**
[https://insureai-portal.netlify.app](https://insureai-portal.netlify.app)

---

# 🚀 Overview

**InsureAI** is a modern frontend application that allows users to interact with their insurance data using **natural language queries**.

Instead of navigating through complex filters, users can simply ask:

```
Show cardiologists in Delhi
Show approved claims
Doctors in Pune
Find in-network providers
```

The system uses **AI (Google Gemini)** to convert user queries into structured intent data, which is then used to fetch relevant claims or providers.

This project demonstrates **AI integration with frontend architecture**, clean state management, and robust error handling.

---

# ✨ Key Features

### 🤖 AI Smart Search

Natural language queries are processed using **Gemini AI** to extract structured intent.

Example:

User Query

```
Show in-network cardiologists in Delhi
```

AI Response

```json
{
  "intent": "get_providers",
  "filters": {
    "speciality": "cardiologist",
    "location": "Delhi",
    "providerStatus": "in-network"
  },
  "limit": null
}
```

The app then fetches the filtered results automatically.

---

### 🔐 Authentication System

Implemented using **Firebase Authentication**

Features:

- Secure user signup
- Login authentication
- Protected routes
- Error handling for invalid credentials
- Form validation

---

### 🧾 Claims Management

Users can:

- View claims dashboard
- Filter claims via AI search
- See claim status
  - Approved
  - Pending
  - Denied

- View claim details

Example AI query:

```
Show my denied claims
Show recent approved claims
```

---

### 🏥 Provider Search

Users can search for healthcare providers using AI.

Example queries:

```
Cardiologists in Delhi
Dermatologists in Mumbai
Doctors in Pune
In network doctors near Hyderabad
```

Provider data includes:

- Doctor name
- Specialty
- Location
- Network status

---

### ⚡ Smart UI States

The application handles multiple UI states to ensure smooth UX:

- Loading Shimmers
- No Data Found
- AI Unknown Intent
- API Failure
- Empty Results

This prevents blank screens and improves user experience.

---

# 🧠 AI Query Processing Flow

```
User Query
   ↓
Gemini AI API
   ↓
Intent + Filters JSON
   ↓
Service Layer
   ↓
Mock API Filtering
   ↓
UI Rendering
```

This architecture allows natural language queries to be translated into structured API requests.

---

# 🏗️ Project Architecture

The project follows a **clean separation of concerns** between UI, business logic, and API services.

```
src
│
├── assets
├── constants
├── module
│   └── ...see repo
│
├── page
│   ├── DashboardPage.jsx
│   ├── ClaimsPage.jsx
│   ├── ProviderPage.jsx
│   └── AuthPage.jsx
│   └── ...see repo
│
├── ui
│   ├── DashboardUI.jsx
│   ├── ClaimsUI.jsx
│   ├── ProviderUI.jsx
│   └── AuthUI.jsx
│   └── ...see repo
│
│
├── service
│   ├── aiService.js
│   ├── claimsService.js
│   ├── providerService.js
│   └── firebaseApi.js
│   └── ...see repo
├── router
├   └── ...see repo
├── store
│
└── utility
│    └── validate.js
└── root.jsx
└── bootstrap.jsx
└── index.css
```

---

# 🛠 Tech Stack

### Frontend

- React
- Vite
- TailwindCSS
- React Router

### AI

- Google Gemini API

### Authentication

- Firebase Authentication

### Data

- MockAPI.io (REST endpoints)

### Deployment

- Netlify

---

# ⚙️ Installation

Clone the repository

```
git clone https://github.com/your-username/insureai-portal.git
```

Navigate to the project

```
cd insureai-portal
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file:

```
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

---

# 📸 Screenshots

### Authentication

Secure login and signup with Firebase.
![Login](/ai-ins-app/screenshots/A1.png)
![Login with credtianls](screenshots/Auth%202.png)
![Signup](screenshots/Auth%203.png)

---

### AI Smart Search

Search providers and claims using natural language.
![Dashboard](screenshots/DashboardP1.png)

---

### Claims Dashboard

View insurance claims.
![Claims](screenshots/Claims1.png)

---

### Provider Dashboard

View providers.
![Providers](screenshots/Provider1.png)

---

### Profile Dashboard

View providers.
![Profile](screenshots/Profile1.png)

---

### Provider/ Claims AI Search

Find doctors by location, speciality, and network status or show my denied claims, my last 3 approved claims
![Dashboard-Claim-AI-Search](screenshots/DashbordC1.png)
![Dashboard-Provider-AI-Search](screenshots/Dashboard%201.png)

---

# 📈 What This Project Demonstrates

This project showcases practical skills in:

- AI Integration with Frontend
- API Architecture
- React State Management
- Error Handling
- UX Handling for Async Data
- Authentication Systems
- Deployment & Production Build

---

# 👨‍💻 Author

**Prashant Nath**

Frontend Developer
React | JavaScript | UI Engineering

---

# ⭐ If you like this project

Give the repository a ⭐ on GitHub!

---

⚡ Version 1 – AI Insurance Portal (MVP)

🚧 **Project Status: Version 1 (MVP)**

This project currently represents the first version of the AI Insurance Portal.  
More AI capabilities and platform improvements are planned for future updates.

Planned enhancements include:

- Advanced filters for claims and provider pages
- Improved AI query understanding
- Connecting the Profile page (currently static) to Firestore for persistent user data
