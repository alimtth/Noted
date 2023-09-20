import './Card.css'
import CardsItem from '../CardsItem';
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
    {
        id: 3,
        title:"هدف من برای سال حدید",
        description:"اولین هدفم اینکه بتونم...",
        date:"۲ فروردین ۱۴۰۲",
        color: "#8377D1"
    },
    {
        id: 4,
        title:"کتاب هایی که میخواهم بخونم",
        description:"کتابخونه نمیشه شب...",
        date:"۱ شهریور ۱۴۰۲",
        color: "#38A3A5"
    },
    {
        id: 5,
        title:"کتاب هایی که میخواهم بخونم",
        description:"کتابخونه نمیشه شب...",
        date:"۱ شهریور ۱۴۰۲",
        color: "#383A5"
    },
    
]
function Card() {
    const [cardSelected, setselected] = useState(null);
    return (
       <div className='card-notess'>
        {cards.map((item)=> {
            return <CardsItem 
            key={item.id} 
            selected={item.id === cardSelected}
            event={() => setselected(item.id)}
            {...item} 
            />
        })}
       </div>
    );
}

export default Card;