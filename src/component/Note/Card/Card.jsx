import "./Card.css";
import CardsItem from "../CardsItem";
import { Plus } from "react-bootstrap-icons";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "خلاصه جلسه ۱۲ صدکدرز ",
    description: "دیزاین یه ماشین حساب رو...",
    date: "۱۸ شهریور ۱۴۰۲",
    color: "#4C86A8",
  },
  {
    id: 2,
    title: "کتاب هایی که میخواهم بخونم",
    description: "کتابخونه نمیشه شب...",
    date: "۱ شهریور ۱۴۰۲",
    color: "#38A3A5",
  },
];
function Card() {
  const [cardSelected, setselected] = useState(null);
  const [isShowAddNote, setisShowAddNote] = useState(false);
  const [newNoteValueTitle, setNewNoteValueTitle] = useState();
  const [newNoteValueDes, setNewNoteValueDes] = useState();
  const [newNoteValueDate, setNewNoteValueDate] = useState();
  const [Notes, setNotes] = useState(cards);
  const [selectedColor, setSelectedColor] = useState();
  const [nextId, setNextId] = useState(6);


  const handlClickAddNote = () => {
    setisShowAddNote(true);
  };

  const cancelHandlerBtnAddNote = () => {
    setisShowAddNote(false);
  };

  const handlchangBtnAddNoteTitle = (event) => {
    setNewNoteValueTitle(event.target.value);
  };
  const handlchangBtnAddNoteDes = (event) => {
    setNewNoteValueDes(event.target.value);
  };
  const handlchangBtnAddNoteDate = (event) => {
    setNewNoteValueDate(event.target.value);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handlChangOKnewNote = () => {
    const newNote = {
      title: newNoteValueTitle,
      description: newNoteValueDes,
      date: newNoteValueDate,
      color: selectedColor,
      id: nextId,
    };
    const upNoteNew = [...Notes, newNote];
    setNotes(upNoteNew);
    setisShowAddNote(false);
    setNextId(nextId + 1)
    // setNewNoteValue('');
  };
  return (
    <>
      <div className="button">
        <button className="button1" onClick={handlClickAddNote}>
          {" "}
          <Plus className="plus" />
          یادداشت جدید{" "}
        </button>
      </div>

      {isShowAddNote && (
        <div>
          <section className="add-note-paren">
            <input
              type="text"
              className="add_note"
              placeholder="موضوع خود را وارد کنید"
              onChange={handlchangBtnAddNoteTitle}
            />
            <input
              type="text"
              className="add_note"
              placeholder="متن خود را وارد کنین"
              onChange={handlchangBtnAddNoteDes}
            />
            <input
              type="date"
              className="add_note"
              placeholder="تارییخ را وارد کنین"
              onChange={handlchangBtnAddNoteDate}
            />
          </section>
          <div className="selectColor">
            <div
              className="color1"
              onClick={() => handleColorSelect("#38A3A5")}
            ></div>
            <div
              className="color2"
              onClick={() => handleColorSelect("#8377D1")}
            ></div>
            <div
              className="color3"
              onClick={() => handleColorSelect("#4C86A8")}
            ></div>
            <div
              className="color4"
              onClick={() => handleColorSelect("#ac2121")}
            ></div>
            <div
              className="color5"
              onClick={() => handleColorSelect("#bdbf43")}
            ></div>
          </div>

          <div className="add_note_ok_cancel">
            <button className="btn-ok-new-folder" onClick={handlChangOKnewNote}>
              ثبت
            </button>
            <button
              className="btn-cancel-new-folder"
              onClick={cancelHandlerBtnAddNote}
            >
              برگشت
            </button>
          </div>
        </div>
      )}

      <div className="card-notess">
        {Notes.map((item) => {
          return (
            <CardsItem
              key={item.id}
              selected={item.id === cardSelected}
              event={() => setselected(item.id)}
              {...item}
            />
          );
        })}
      </div>
    </>
  );
}

export default Card;
