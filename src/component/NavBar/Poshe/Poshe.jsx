import './Poshe.css'
import folderIcon from "@/assets/images/icons/folder.svg";
import NewFolderIcon from "@/assets/images/icons/new-folder.svg";
import OpenFolderIcon from "@/assets/images/icons/open-folder.svg";
import NavBarItem from "../NavBarItem/NavBarItem";
import { useState } from 'react';

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
  const [selectPoshe , setSelectPoshe] = useState(null);
  const [isShowFolder , setisShowFolder] = useState(false);
  const [NewFolderValue, setNewFolderValue] = useState();
  const [Folders, setFolders] = useState(initialPoshes);


  const handlerBtnAddFolder = () => {
    setisShowFolder(true)
  }

  const cancelHandlerBtnAddFolder = () => {
    setisShowFolder(false)
  }


    const handlchang = (event) => {
      setNewFolderValue(event.target.value)
    }


    const handlchangOK = () => {
      setFolders([{name: NewFolderValue}, ...Folders]);
      setisShowFolder(false);

    }


    return (
        <section className='title-poshe'>
            <header>
                <h2>پوشه ها</h2>
                <button className='new-folder-button'>
                    <img className='NewFolderIcon' src={NewFolderIcon} onClick={handlerBtnAddFolder} />
                </button>
            </header>

            {isShowFolder &&(
              <div >
              <div className='folder'>
                <img src={folderIcon}/>
                <input type="text" className='input-new-folder' onChange={handlchang}/>
                <button className='btn-ok-new-folder' onClick={handlchangOK}>OK</button>
                <button onClick={cancelHandlerBtnAddFolder
                }>Cancel</button>
              </div>
            </div>
            )}

            <div className='allfolder'>
                {Folders.map((item, index) => (
                    <NavBarItem 
                    key={item.id} 
                    text={item.name} 
                    selectPoshe={item.id === selectPoshe}
                    event={()=> setSelectPoshe(item.id)}
                    icon={index === 0 ? OpenFolderIcon : folderIcon}
                    />
                ))}

            </div>
            
        </section>
    );
}

export default Poshe;
