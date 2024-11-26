import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './routes/App.jsx';
import LoginPage from './components/LoginPage.jsx';
import HomePage from './components/HomePage.jsx'
import SignUp from './components/SignUp.jsx';
import AboutPage from './components/AboutPage.jsx';
import BlogPage from './components/BlogPage.jsx';
import EventList from './components/EventList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/events", element: <EventList /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
