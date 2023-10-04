import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFuond from "./components/404/NotFuond.jsx";
import Note from "./components/Note/index.jsx";
import EmptyNote from "./components/Note/EmptyNote.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index: true,
        element: <EmptyNote />,

      },
      {
        path: "note/:noteId",
        element: <Note />,
      },
    ]
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
