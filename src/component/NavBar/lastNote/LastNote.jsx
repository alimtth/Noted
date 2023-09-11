import './LastNote.css'
import { FileBarGraph } from 'react-bootstrap-icons';


function lastNote() {
    return (
        <div>
            <h5 className='title-notee'>آخرین یادداشت ها</h5>
            <h3 className='title-noted'><FileBarGraph className='ali'/>هدفم برای سال جدید</h3>
            <h3 className='title-noted'><FileBarGraph className='ali'/>کتاب‌هایی که می‌خوام بخونم</h3>
            <h3 className='title-noted'><FileBarGraph className='ali'/>خلاصه جلسه ۱۲ صدکدرز</h3>
        </div>
    );
}
export default lastNote;
