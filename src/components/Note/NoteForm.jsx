import folderIcon from "@/assets/images/icons/folder.svg";
import calenderIcon from "@/assets/images/icons/calender.svg";

const NoteForm = ({ note, onUpdate }) => {
  return (
    <div className="note-form">
      <div className="note-form__header">
        <input className="note-form__header__title" value={note? note.title : ""} onChange={(e) => onUpdate("title", e.target.value)}></input>
      </div>

      <div className="note-form__details">
        <div className="note-form__details__item">
          <img src={folderIcon} />
          <div className="note-form__details__title">پوشه</div>
          <div className="note-form__details__value">شخصی</div>
        </div>

        <div className="note-form__details__item">
          <img src={calenderIcon} />
          <div className="note-form__details__title">زمان ایجاد</div>
          <div className="note-form__details__value">
            {note ? note.date : ""}
          </div>
        </div>
      </div>

      <div className="note-form__content">
        <textarea
          value={note ? note.description : ""}
          onChange={(e) => onUpdate("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default NoteForm;
