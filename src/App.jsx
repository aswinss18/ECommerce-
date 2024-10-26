import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Discount from "./components/ui/Discount";
import Header from "./components/ui/Header";
import Register from "./components/pages/Register";

const routes = createBrowserRouter([{ path: "/", element: <Register /> }]);

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
