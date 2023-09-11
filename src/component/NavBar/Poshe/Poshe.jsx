import './Poshe.css'
import { FolderPlus} from 'react-bootstrap-icons';
import { Folder2Open} from 'react-bootstrap-icons';
import { Folder } from 'react-bootstrap-icons';


function Poshe() {
    return (
        <div>
            <div className='title-poshe'>
            <h3 className='title2'>پوشه ها</h3>
            <h4><FolderPlus className='folder-plus'/></h4>
            </div>
            <div className='allfolder'>
            <h3 className='title-noted-folder-all'><Folder2Open className='ali'/>همه یادداشت ها</h3>
            <h3 className='title-noted-folder'><Folder className='ali'/>کاری</h3>
            <h3 className='title-noted-folder'><Folder className='ali'/>مسافرت</h3>
            <h3 className='title-noted-folder'><Folder className='ali'/>رویدادها</h3>
            <h3 className='title-noted-folder'><Folder className='ali'/>باشگاه</h3>

            </div>
            
        </div>
    );
}

export default Poshe;