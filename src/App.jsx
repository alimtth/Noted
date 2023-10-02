import "./App.css";
import Note from "./components/Note";
import NavBar from "./components/Navbar";
import NoteList from "./components/NoteList";
import { NoteProvider } from "./providers/NoteProvider";

function App() {
  return (
    <NoteProvider>
      <NavBar />
      <NoteList />
      <Note />
    </NoteProvider>
  );
}

export default App;
