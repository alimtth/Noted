import './App.css'
import NavBar from './component/NavBar/NavBar'
import NoteList from './component/NoteList/NoteList'
import Note from './component/Note/Note'
import {NoteProvider} from './component/NoteProvider/NoteProvider'

function App() {

  return (
    <NoteProvider >
    <NavBar />
    <Note />
    <NoteList />
    </NoteProvider>
    
  )
}

export default App
