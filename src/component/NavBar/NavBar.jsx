import './Navbar.css'
import LastNote from './lastNote/LastNote';
import Poshe from './Poshe/Poshe';
import More from './More/More';
import { Search } from 'react-bootstrap-icons';
import { Plus } from 'react-bootstrap-icons';


function NavBar() {
    return (
        <div className='nav'>
            <div className='parent'>
            <div className='search'>
            <h3 className='icon-text-navbar'>Noted</h3>
            <h4><Search className='serc'/></h4>
            </div>    
            <div className='button'>
                <button className='button1'> <Plus className='plus'/>یادداشت جدید </button>
            </div>
            
            <LastNote />
            
            <Poshe />
            
            <More />
            
            </div>
        </div>
    );
}

export default NavBar;