import './Navbar.css'
import LastNote from './lastNote/LastNote';
import Poshe from './Poshe/Poshe';
import More from './More/More';
import { Search } from 'react-bootstrap-icons';


function NavBar() {
    // const [isShowAddNote , setisShowAddNote] = useState(false);
    // const [newNoteValue , setNewNoteValue] = useState();
    // // const [Notes , setNotes] = useState();


    // const handlClickAddNote = () => {
    //     setisShowAddNote(true)
    // }

    // const cancelHandlerBtnAddNote = () => {
    //     setisShowAddNote(false)
    // }

    // const handlchangBtnAddNote = (e) => {
    //     setNewNoteValue(e.target.value)
    //     console.log(newNoteValue);
    // }


    // const handlChangOKnewNote = () => {
    //     const newNote = {title: newNoteValue};
    //     const upNoteNew = [...Notes, newNote];
    //     setNotes(upNoteNew);

    // }


    return (
        <div className='nav'>
            <div className='parent'>
            <div className='search'>
            <h3 className='icon-text-navbar'>Noted</h3>
            <h4><Search className='serc'/></h4>
            </div>    
            {/* <div className='button'>
                <button className='button1' onClick={handlClickAddNote}> <Plus className='plus' />یادداشت جدید </button>
                
            </div>

                {isShowAddNote &&(
                    <div>
                    <section className='add-note-paren'>
                    <input type="text" className='add_note' placeholder='موضوع خود را وارد کنید' onChange={handlchangBtnAddNote}/>
                    <input type="text" className='add_note' placeholder='متن خود را وارد کنین' onChange={handlchangBtnAddNote}/>
                    <input type="date" className='add_note' placeholder='تاریخ را وارد کنین'  onChange={handlchangBtnAddNote}/>
                    </section>
    
                    <div className="add_note_ok_cancel">
                    <button className='btn-ok-new-folder' >ثبت</button>
                    <button className='btn-cancel-new-folder' onClick={cancelHandlerBtnAddNote}>برگشت</button>
                    </div>
                    </div>
                )} */}
            
            <LastNote />
            
            <Poshe />
            
            <More />
            
            </div>
        </div>
    );
}

export default NavBar;