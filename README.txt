# 🎰 Lucky Casino - Full Stack Game App

Lucky Casino is a full-stack web application that simulates a virtual casino experience. Users can register, log in, and play games like Coin Flip while managing their virtual balance. Administrators have access to a dashboard to manage users, modify balances, and delete accounts. The project is built with a modern tech stack using TypeScript on both frontend and backend.

## 🚀 Installation

To run the project locally, follow these steps:

### 1. Backend setup

In the `backend` directory, create a `.env` file with the following environment variables:

```
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_jwt_secret_key
```

Then install the dependencies and start the backend server:

```bash
cd backend
npm install
npm run dev
```

Make sure your PostgreSQL server is running and accessible with the credentials provided.

### 2. Frontend setup

In the `casino-game` directory, create a `.env` file with the following environment variable:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Replace the port if your backend runs on a different one.

Then install the dependencies and start the development server:

```bash
cd casino-game
npm install
npm run dev
```

Once both servers are up, open your browser and go to [http://localhost:3000](http://localhost:3000) to access the app.

## 🧪 Features

- Secure user authentication with JWT  
- Coin Flip game with animated flip logic and betting system  
- Admin panel to manage users and balances  
- Virtual wallet with balance tracking  
- Persistent login using Zustand state management  
- Responsive and accessible UI with Tailwind CSS  
- Framer Motion animations for enhanced UX  
- ETag-based caching for efficient game data fetching  
- Centralized API communication and error handling

## 🧰 Tech Stack

**Frontend**: Next.js, React, TypeScript, Tailwind CSS, Zustand, Framer Motion  
**Backend**: Node.js, Express, TypeScript, PostgreSQL, JWT  
**API Documentation**: Swagger (accessible at `/api-docs` on the backend)

## 📄 License

This project is open-source and licensed under the MIT License.