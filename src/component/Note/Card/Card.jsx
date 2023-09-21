import './Card.css'
import CardsItem from '../CardsItem';
import { Plus } from 'react-bootstrap-icons';
import { useState } from 'react';

const cards = [
    {
        id: 1,
        title:"خلاصه جلسه ۱۲ صدکدرز ",
        description:"دیزاین یه ماشین حساب رو...",
        date:"۱۸ شهریور ۱۴۰۲",
        color: "#4C86A8"

    },
    {
        id: 2,
        title:"کتاب هایی که میخواهم بخونم",
        description:"کتابخونه نمیشه شب...",
        date:"۱ شهریور ۱۴۰۲",
        color: "#38A3A5"
    },
    // {
    //     id: 3,
    //     title:"هدف من برای سال حدید",
    //     description:"اولین هدفم اینکه بتونم...",
    //     date:"۲ فروردین ۱۴۰۲",
    //     color: "#8377D1"
    // },
    // {
    //     id: 4,
    //     title:"کتاب هایی که میخواهم بخونم",
    //     description:"کتابخونه نمیشه شب...",
    //     date:"۱ شهریور ۱۴۰۲",
    //     color: "#38A3A5"
    // },
    // {
    //     id: 5,
    //     title:"کتاب هایی که میخواهم بخونم",
    //     description:"کتابخونه نمیشه شب...",
    //     date:"۱ شهریور ۱۴۰۲",
    //     color: "#383A5"
    // },
    
]
function Card() {
    const [cardSelected, setselected] = useState(null);
    const [isShowAddNote , setisShowAddNote] = useState(false);
    const [newNoteValueTitle , setNewNoteValueTitle] = useState();
    const [newNoteValueDes , setNewNoteValueDes] = useState();
    const [newNoteValueDate , setNewNoteValueDate] = useState();
    const [Notes , setNotes] = useState(cards);


    const handlClickAddNote = () => {
        setisShowAddNote(true)
    }

    const cancelHandlerBtnAddNote = () => {
        setisShowAddNote(false)
    }

    const handlchangBtnAddNoteTitle = (event) => {
        setNewNoteValueTitle(event.target.value)
    }
    const handlchangBtnAddNoteDes = (event) => {
        setNewNoteValueDes(event.target.value)
    }
    const handlchangBtnAddNoteDate = (event) => {
        setNewNoteValueDate(event.target.value)
    }
   
    
    const handlChangOKnewNote = () => {
        const newNote = {title: newNoteValueTitle, description: newNoteValueDes, date: newNoteValueDate };
        const upNoteNew = [...Notes, newNote];
        setNotes(upNoteNew);
        setisShowAddNote(false);
        // setNewNoteValue('');
    
    }
    return (
        <>
        <div className='button'>
                <button className='button1' onClick={handlClickAddNote}> <Plus className='plus' />یادداشت جدید </button>
                
            </div>

                {isShowAddNote &&(
                    <div>
                    <section className='add-note-paren'>
                    <input type="text" className='add_note' placeholder='موضوع خود را وارد کنید' onChange={handlchangBtnAddNoteTitle}/>
                    <input type="text" className='add_note' placeholder='متن خود را وارد کنین' onChange={handlchangBtnAddNoteDes}/>
                    <input type="date" className='add_note' placeholder='تارییخ را وارد کنین'  onChange={handlchangBtnAddNoteDate}/>
                    
                    
                    </section>
    
                    <div className="add_note_ok_cancel">
                    <button className='btn-ok-new-folder' onClick={handlChangOKnewNote}>ثبت</button>
                    <button className='btn-cancel-new-folder' onClick={cancelHandlerBtnAddNote}>برگشت</button>
                    </div>
                    </div>
                )}

                
       <div className='card-notess'>
        {Notes.map((item)=> {
            return <CardsItem 
            key={item.id} 
            selected={item.id === cardSelected}
            event={() => setselected(item.id)}
            {...item} 
            />
        })}
       </div>
       </>
    );
}

export default Card;