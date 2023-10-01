import { Calendar, Folder } from "react-bootstrap-icons";
import TextEdit from "../textEdit/TextEdit";
import iconSeNoghte from "../../../../assets/images/icons/Frame 1.png";
import { useState } from "react";
import { useCardContext } from "@/component/Context/CardContext";

function NavFormNote() {
  const cards = useCardContext();
  const [isShowAddNote, setisShowAddNote] = useState(false);
  const [selectedColor, setSelectedColor] = useState();
  const [newNoteValueTitle, setNewNoteValueTitle] = useState();
  const [newNoteValueDes, setNewNoteValueDes] = useState();
  const [newNoteValueDate, setNewNoteValueDate] = useState();
  const [Notes, setNotes] = useState(cards);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handlClickAddNote = () => {
    setisShowAddNote(true);
  };

  const handlchangBtnAddNoteTitle = (event) => {
    setNewNoteValueTitle(event.target.value);
    // console.log(event.target.value);
  };
  const handlchangBtnAddNoteDes = (event) => {
    setNewNoteValueDes(event.target.value);
  };
  const handlchangBtnAddNoteDate = (event) => {
    setNewNoteValueDate(event.target.value);
  };

  const handlChangOKnewNote = () => {
    const newNote = {
      title: newNoteValueTitle,
      description: newNoteValueDes,
      date: newNoteValueDate,
      color: selectedColor,
      //     id: nextId2,
    };
    console.log(Notes);
    const upNoteNew = [...Notes, newNote];
    setNotes(upNoteNew);
    setisShowAddNote(false);
  };
  //   setNextId2(nextId2 + 1);

  return (
    <div className="NavBar__Note">
      <div className="title_Navbar">
        {/* <h3>خلاصه جلسه ۱۲ صدکدرز</h3> */}
        <input
          type="text"
          className="input__title"
          onChange={handlchangBtnAddNoteTitle}
          placeholder="موضوع خود را وارد کنید"
        />
        <img src={iconSeNoghte} onClick={handlClickAddNote} />

        {isShowAddNote && (
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
        )}
      </div>
      <div className="title_Navbar_2">
        <div className="folder_NavBarNote">
          <Folder />
          <h3>پوشه</h3>
          <h4>شخصی</h4>
          <button className="btn-ok-new-folder" onClick={handlChangOKnewNote}>
            ثبت
          </button>
        </div>
        <div className="date">
          <Calendar />
          <h5>زمان ایجاد</h5>
          <h6>۱۸ شهریور ۱۴۰۲</h6>
        </div>
      </div>
      <div className="Rectangle"></div>
      <TextEdit />
    </div>
  );
}

export default NavFormNote;
