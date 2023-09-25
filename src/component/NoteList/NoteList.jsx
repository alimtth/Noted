import "./NoteList.css";
import EmptyNote from "./EmptyNote.jsx/EmptyNote";
import FormNotes from "./FormNote/FormNotes";
import { useState } from "react";

function NoteList() {
    const [showFolderNote] = useState(true);
  return (
    <div id="Note">
    {showFolderNote ? <EmptyNote /> : <FormNotes />}
     </div>

  );
}

export default NoteList;
