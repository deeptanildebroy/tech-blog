import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/",
      element: <RegisterPage/>
    },
    {
      path: "/home",
      element: <HomePage/>,
      children: [
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
