import './Poshe.css'
import folderIcon from "@/assets/images/icons/folder.svg";
import NewFolderIcon from "@/assets/images/icons/new-folder.svg";
import OpenFolderIcon from "@/assets/images/icons/open-folder.svg";
import NavBarItem from "../NavBarItem/NavBarItem";
import { useEffect, useState } from 'react';

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
  const [nextId, setNextId] = useState(6);


 
  


  const handlerBtnAddFolder = () => {
    setisShowFolder(true)
  }

  const cancelHandlerBtnAddFolder = () => {
    setisShowFolder(false)
  }


    const handlchang = (event) => {
      setNewFolderValue(event.target.value)
    }

     useEffect(() => {
    const storedFolders = localStorage.getItem("folders");
    if (storedFolders) {
      setFolders(JSON.parse(storedFolders));
    }
  }, []);


    const handlchangOK = () => {
      const newFolder = { name: NewFolderValue, id: nextId };
      const updatedFolders = [...Folders, newFolder];
      setFolders(updatedFolders);
      setisShowFolder(false);
      setNewFolderValue('');
      setNextId(nextId + 1);
    
      // ذخیره پوشه‌ها در لوکال استوریج
      // localStorage.setItem("folders", JSON.stringify(updatedFolders));
    };
    

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
                <img src={NewFolderIcon}/>
                <input type="text" className='input-new-folder' onChange={handlchang} placeholder='نام فولدر...'/>
                <button className='btn-ok-new-folder' onClick={handlchangOK}>ثبت</button>
                <button className='btn-cancel-new-folder' onClick={cancelHandlerBtnAddFolder}>برگشت</button>
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
