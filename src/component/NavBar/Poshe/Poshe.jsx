import './Poshe.css'
import folderIcon from "@/assets/images/icons/folder.svg";
import NewFolderIcon from "@/assets/images/icons/new-folder.svg";
import OpenFolderIcon from "@/assets/images/icons/open-folder.svg";
import NavBarItem from "../NavBarItem/NavBarItem";
import { useState } from 'react';

const Poshes = [
    {
        id: 1,
        name: "همه یاsssد‌داشت‌‌ها",
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

  // const [open, setOpen] = useState(null);

  // const toggle = (index) => {
  //   if (open === index) {
  //     setOpen(null);
  //   }else {
  //     setOpen(index);
  //   }
  // };
    return (
        <section className='title-poshe'>
            <header>
                <h2>پوشه ها</h2>
                <button className='new-folder-button'>
                    <img src={NewFolderIcon} />
                </button>
            </header>

            <div className='allfolder'>
                {Poshes.map((item, index) => (
                    <NavBarItem 
                    key={item.id} 
                    text={item.name} 
                    selectPoshe={item.id === selectPoshe}
                    event={()=> setSelectPoshe(item.id)}
                    icon={index === 0 ? OpenFolderIcon : folderIcon}
                    // click={()=> toggle(index)}
                    />
                ))}

            </div>
            
        </section>
    );
}

export default Poshe;
