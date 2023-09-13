import './Poshe.css'
import folderIcon from "@/assets/images/icons/folder.svg";
import NewFolderIcon from "@/assets/images/icons/new-folder.svg";
import OpenFolderIcon from "@/assets/images/icons/open-folder.svg";
import NavBarItem from "../NavBarItem/NavBarItem";

const Poshes = [
    {
        name: "همه یاد‌داشت‌‌ها",
      },
      {
        name: "کاری",
      },
      {
        name: "مسافرت",
      },
      {
        name: "رویدادها",
      },
      {
        name: "باشگاه",
      },
];

function Poshe() {
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
                    <NavBarItem key={item.name} text={item.name} isSelected={index === 0} icon={index === 0 ? OpenFolderIcon : folderIcon}/>
                ))}

            </div>
            
        </section>
    );
}

export default Poshe;
            // <div className='title-poshe'>
            // <h3 className='title2'>پوشه ها</h3>
            // <h4><FolderPlus className='folder-plus'/></h4>
            // </div>
            // <div className='allfolder'>
            // <h3 className='title-noted-folder-all'><Folder2Open className='ali'/>همه یادداشت ها</h3>
            // <h3 className='title-noted-folder'><Folder className='ali'/>کاری</h3>
            // <h3 className='title-noted-folder'><Folder className='ali'/>مسافرت</h3>
            // <h3 className='title-noted-folder'><Folder className='ali'/>رویدادها</h3>
            // <h3 className='title-noted-folder'><Folder className='ali'/>باشگاه</h3>

            // </div>