import "./App.css";
import Home from "./component/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Mainlayout from "./component/layouts/Mainlayout";
function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "Contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
