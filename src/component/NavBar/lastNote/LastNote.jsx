import './LastNote.css'

import DocIcon from "@/assets/images/icons/doc.svg";
import NavBarItem from '../NavBarItem/NavBarItem';


const lastNotes = [
    {
        note: "هدفم برای سال جدید",
    },
    {
        note: "کتاب هایی که میخوام بخونم",
    },
    {
        note: "خلاصه جلسه ۱۲ صدکدرز",
    }
];

function LastNotes() {

    return (
      <section className="last-note-container">
        <h5>آخرین یادداشت‌ها</h5>
  
        <div className="last-notes">
          {lastNotes.map((item) => {
            return <NavBarItem key={item.note} text={item.note} icon={DocIcon} />;
          })}
        </div>
      </section>
    );
  }
  
  export default LastNotes;
