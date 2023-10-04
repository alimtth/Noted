import { useContext } from "react";
import NavBarItem from "./NavBarItem";
import DocIcon from "@/assets/images/icons/doc.svg";
import { noteContext } from "@/providers/NoteProvider";
import { Link, useParams } from "react-router-dom";

function LastNotes() {
  const { notes } = useContext(noteContext);
  const { noteId } = useParams();

  const lastNotes = notes.slice(-3);

  return (
    <section className="last-notes-container">
      <h2>آخرین یادداشت‌ها</h2>

      <div className="last-notes">
        {lastNotes.map((item) => {
          return (
            <Link key={item.id} to={`/note/${item.id}`}>
              <NavBarItem
               text={item.title}
                icon={DocIcon}
                isSelected={item.id == noteId}
                 />;
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default LastNotes;
