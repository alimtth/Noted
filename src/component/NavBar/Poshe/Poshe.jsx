import "./Poshe.css";
import folderIcon from "@/assets/images/icons/folder.svg";
import NewFolderIcon from "@/assets/images/icons/new-folder.svg";
import OpenFolderIcon from "@/assets/images/icons/open-folder.svg";
import { Plus } from "react-bootstrap-icons";
import Btn from "@/component/Ui/Btn/Btn";

import NavBarItem from "../NavBarItem/NavBarItem";
import { useEffect, useState } from "react";

const initialPoshes = [
  {
    id: 1,
    name: "همه یاد‌داشت‌‌ها",
  },
  {
    id: 2,
    name: "کاری",
  },
  {
    id: 3,
    name: "مسافرت",
  },
  {
    id: 4,
    name: "رویدادها",
  },
  {
    id: 5,
    name: "باشگاه",
  },
];

function Poshe() {
  const [selectPoshe, setSelectPoshe] = useState(null);
  const [isShowFolder, setisShowFolder] = useState(false);
  const [NewFolderValue, setNewFolderValue] = useState();
  const [Folders, setFolders] = useState(initialPoshes);
  const [nextId, setNextId] = useState(6);

  const handlerBtnAddFolder = () => {
    setisShowFolder(true);
  };

  const cancelHandlerBtnAddFolder = () => {
    setisShowFolder(false);
  };

  const handlchang = (event) => {
    setNewFolderValue(event.target.value);
  };

  const handlchangOK = () => {
    const newFolder = { name: NewFolderValue, id: nextId };
    const updatedFolders = [...Folders, newFolder];
    setFolders(updatedFolders);
    setisShowFolder(false);
    setNewFolderValue("");
    setNextId(nextId + 1);
    console.log("salam");

    localStorage.setItem("folders", JSON.stringify(updatedFolders));
  };
  useEffect(() => {
    const storedFolders = localStorage.getItem("folders");
    if (storedFolders) {
      setFolders(JSON.parse(storedFolders));
    }
  }, []);

  useEffect(() => {
    const handlFolder = (event) => {
      const isClickInForm = event.target.closest(".folder, header");
      if (!isClickInForm) {
        setisShowFolder(false);
      }
    };
    if(isShowFolder){
      document.body.addEventListener("click", handlFolder);
    }
    return () => {
      document.body.removeEventListener("click", handlFolder);
    }
  }, [isShowFolder]);


  return (
    <section className="title-poshe">
      <header>
        <h2>پوشه ها</h2>
        <button className="new-folder-button">
          <img
            className="NewFolderIcon"
            src={NewFolderIcon}
            onClick={handlerBtnAddFolder}
          />
        </button>
      </header>

      {isShowFolder && (
        <div>
          <form className="folder" onSubmit={handlchangOK}>
            <img src={NewFolderIcon} />
            <input
              type="text"
              className="input-new-folder"
              onChange={handlchang}
              placeholder="نام پوشه ..."
            />
            <Btn type="submit" variant="ok">
              ثبت
              <Plus />
            </Btn>
            <Btn onClick={cancelHandlerBtnAddFolder} variant="cancel">
              cancel
            </Btn>
          </form>
        </div>
      )}

      <div className="allfolder">
        {Folders.map((item, index) => (
          <NavBarItem
            key={item.id}
            text={item.name}
            selectPoshe={item.id === selectPoshe}
            event={() => setSelectPoshe(item.id)}
            icon={index === 0 ? OpenFolderIcon : folderIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default Poshe;
