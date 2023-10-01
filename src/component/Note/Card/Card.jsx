import "./Card.css";
import CardsItem from "../CardsItem";
import { useState } from "react";
import { useCardContext } from "@/component/Context/CardContext";



function Card() {
  const [cardSelected, setselected] = useState(null);
  const cards = useCardContext();

  // const [isShowAddNote, setisShowAddNote] = useState(false);
  // const [newNoteValueTitle, setNewNoteValueTitle] = useState();
  // const [newNoteValueDes, setNewNoteValueDes] = useState();
  // const [newNoteValueDate, setNewNoteValueDate] = useState();
  // const [selectedColor, setSelectedColor] = useState();
  // const [nextId2, setNextId2] = useState(3);
  // const [Notes, setNotes] = useState(cards);

  // const cancelHandlerBtnAddNote = () => {
  //   setisShowAddNote(false);
  // };

  // const handlchangBtnAddNoteTitle = (event) => {
  //   setNewNoteValueTitle(event.target.value);
  // };
  // const handlchangBtnAddNoteDes = (event) => {
  //   setNewNoteValueDes(event.target.value);
  // };
  // const handlchangBtnAddNoteDate = (event) => {
  //   setNewNoteValueDate(event.target.value);
  // };

  // const handleColorSelect = (coloor) => {
  //   setSelectedColor(coloor);
  // };

  // const handlClickAddNote = () => {
  //   setisShowAddNote(true);
  // };

  // const handlChangOKnewNote = () => {
  //   const newNote = {
  //     title: newNoteValueTitle,
  //     description: newNoteValueDes,
  //     date: newNoteValueDate,
  //     color: selectedColor,
  //     id: nextId2,
  //   };
  //   const upNoteNew = [...Notes, newNote];
  //   setNotes(upNoteNew);
  //   setisShowAddNote(false);
  //   setNextId2(nextId2 + 1);

  //   // useEffect(() => {
  //   //   const storegCard = localStorage.getItem("notes");
  //   //   if (storegCard) {
  //   //     setNotes(JSON.parse(storegCard));
  //   //   }
  //   // })
  // };

  return (
    <>
      <div className="card-notess">
        
        {/* {isShowAddNote && (
          <form>
            <div className="add-note-paren">
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
            </div>
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
              <button
                className="btn-ok-new-folder"
                onClick={handlChangOKnewNote}
              >
                ثبت
              </button>
              <button
                className="btn-cancel-new-folder"
                onClick={cancelHandlerBtnAddNote}
              >
                برگشت
              </button>
            </div> */}
          {/* </form> */}
        {/* )} */}
        {cards.map((item) => {
          console.log(cards);
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
