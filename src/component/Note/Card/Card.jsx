import './Card.css'
import CardsItem from '../CardsItem';

const cards = [
    {
        title:"خلاصه جلسه ۱۲ صدکدرز ",
        description:"دیزاین یه ماشین حساب رو...",
        date:"۱۸ شهریور ۱۴۰۲",
        color: "#4C86A8"

    },
    {
        title:"کتاب هایی که میخواهم بخونم",
        description:"کتابخونه نمیشه شب...",
        date:"۱ شهریور ۱۴۰۲",
        color: "#38A3A5"
    },
    {
    
        title:"هدف من برای سال حدید",
        description:"اولین هدفم اینکه بتونم...",
        date:"۲ فروردین ۱۴۰۲",
        color: "#8377D1"
    },
    {
        title:"کتاب هایی که میخواهم بخونم",
        description:"کتابخونه نمیشه شب...",
        date:"۱ شهریور ۱۴۰۲",
        color: "#38A3A5"
    },
    {
        title:"کتاب هایی که میخواهم بخونم",
        description:"کتابخونه نمیشه شب...",
        date:"۱ شهریور ۱۴۰۲",
        color: "#383A5"
    },
    
]
function Card() {
    return (
       <div className='card-notess'>
        {cards.map((item)=> {
            return <CardsItem key={item.title} {...item} />
        })}
       </div>
    );
}

export default Card;