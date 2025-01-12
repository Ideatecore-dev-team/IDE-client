import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import { ContactUs } from "../pages/ContactUs";
import { AboutUs } from "../pages/AboutUs";
import { Gallery } from "../pages/Gallery";
import { Articles } from "../pages/Articles";
import { Article } from "../pages/Article";
import { OurProgram } from "../pages/OurProgram";

const ListRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/article/1",
        element: <Article />,
      },
      {
        path: "/our-program",
        element: <OurProgram />,
      },
    ],
  },
  //   add errors elements
  //   {
  //     path: "*",
  //     element: <div>404 Not Found</div>,
  //   },
]);

export { ListRouter };
