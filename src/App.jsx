import './App.css'
import NavBar from './component/NavBar/NavBar'
import NoteList from './component/NoteList/NoteList'
import Note from './component/Note/Note'
import {NoteProvider} from './component/NoteProvider/NoteProvider'
import { CardProvider } from './component/Context/CardContext'

function App() {

  return (
    <CardProvider>
    <NoteProvider >
    <NavBar />
    <Note />
    <NoteList />
    </NoteProvider>
    </CardProvider>
    
  )
}

export default App
