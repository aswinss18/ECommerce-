import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";

const routes = createBrowserRouter([{ path: "/", element: <Home /> }]);

function App() {
  return (
    <>
      <RouterProvider router={routes}>
        <div>
          <Outlet />
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
