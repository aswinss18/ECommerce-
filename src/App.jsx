import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Discount from "./components/ui/Discount";
import Header from "./components/ui/Header";
import SignUp from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Verify from "./components/pages/Verify";

const routes = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/verify", element: <Verify /> },
]);

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Discount />
        <RouterProvider router={routes}>
          <Outlet />
        </RouterProvider>
      </div>
    </>
  );
}

export default App;
