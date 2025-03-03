import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ListRouter } from "./routes/ListRouter.jsx";
import "./index.css";
import "quill/dist/quill.snow.css"; // Include the Quill stylesheet


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={ListRouter} />{" "}
  </StrictMode>
);
