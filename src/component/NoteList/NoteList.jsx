import "./NoteList.css";
import EmptyNote from "./EmptyNote.jsx/EmptyNote";
import FormNotes from "./FormNote/FormNotes";
import { useContext } from "react";
import { noteContext } from "../NoteProvider/NoteProvider";

function NoteList() {
    // const [showFolderNote] = useState(false);
    const { isNewNoteMode} = useContext(noteContext);
    //true
  return (
    <div id="Note">
    {isNewNoteMode ? <EmptyNote /> : <FormNotes />}
     </div>
  );
}

export default NoteList;
