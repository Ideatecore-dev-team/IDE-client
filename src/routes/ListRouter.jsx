import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import { ContactUs } from "../pages/ContactUs";
import { AboutUs } from "../pages/AboutUs";
import { Gallery } from "../pages/Gallery";
import { Articles } from "../pages/Articles";
import { Article } from "../pages/Article";
import { OurProgram } from "../pages/OurProgram";
import { ArticlesProvider } from "../context/ArticlesContext";

const ListRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ArticlesProvider page={1} size={4}>
            <Home />
          </ArticlesProvider>
        ), // Membungkus Home dengan ArticlesProvider
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
        element: (
          <ArticlesProvider page={1} size={6}>
            <Articles />
          </ArticlesProvider>
        ), // Membungkus Articles dengan ArticlesProvider
      },
      {
        path: "/article/:id",
        element: (
          <ArticlesProvider page={1} size={4}>
            <Article />
          </ArticlesProvider>
        ),
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
