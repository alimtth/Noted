import "./App.css";

import NavBar from "./components/Navbar";
import NoteList from "./components/NoteList";
import { NoteProvider } from "./providers/NoteProvider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <NoteProvider>
      <NavBar />
      <NoteList />
      <Outlet />
    </NoteProvider>
  );
}

export default App;
