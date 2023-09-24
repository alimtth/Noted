import "./Card.css";
import CardsItem from "../CardsItem";
import {  useState } from "react";

const cards = [
  {
    id: 1,
    title: "خلاصه جلسه ۱۲ صدکدرز ",
    description: "دیزاین یه ماشین حساب رو...",
    date: "۱۸ شهریور ۱۴۰۲",
    color: "#4C86A8",
  },
  {
    id: 2,
    title: "کتاب هایی که میخواهم بخونم",
    description: "کتابخونه نمیشه شب...",
    date: "۱ شهریور ۱۴۰۲",
    color: "#38A3A5",
  },
];
function Card() {
  const [cardSelected, setselected] = useState(null);
  
  const [Notes, setNotes] = useState(cards);
  
  // useEffect(() => {
  //   const storegCard = localStorage.getItem("notes");
  //   if (storegCard) {
  //     setNotes(JSON.parse(storegCard));
  //   }
  // })

  
  return (
    <>
    <div className="card-notess">
        {Notes.map((item) => {
          return (
            <CardsItem
              key={item.id}
              selected={item.id === cardSelected}
              event={() => setselected(item.id)}
              {...item}
            />
          );
        })}
      </div>
    </>
  );
}

export default Card;
