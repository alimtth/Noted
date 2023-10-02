import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFuond from "./components/404/NotFuond.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "note/:noteId",
    element: <App />
  },
  {
    path: "*",
    element: <NotFuond />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />

  // </StrictMode>
);
