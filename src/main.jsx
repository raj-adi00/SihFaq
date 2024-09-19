import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import RandomQuestionPage from './RandomQuestionPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // App component with Navbar and Outlet
    children: [
      {
        path: "",
        element: <Home />,  // Home component rendered inside the Outlet
      }, {
        path: "/question/:index",
        element: <RandomQuestionPage />
      }
      // Add more routes here for different pages
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
