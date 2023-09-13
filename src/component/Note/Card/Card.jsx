import './Card.css'
import CardsItem from '../CardsItem';

const cards = [
    {
        title:"خلاصه جلسه ۱۲ صدکدرز ",
        description:"دیزاین یه ماشین حساب رو...",
        date:"۱۸ شهریور ۱۴۰۲"
    },
    {
        title:"کتاب هایی که میخواهم بخونم",
        description:"کتابخونه نمیشه شب...",
        date:"۱ شهریور ۱۴۰۲"
    },
    {
        title:"هدف من برای سال حدید",
        description:"اولین هدفم اینکه بتونم...",
        date:"۲ فروردین ۱۴۰۲"
    },
]
function Card() {
    return (
       <div className='card-notess'>
        {cards.map((item, index)=> {
            return <CardsItem key={item.title} title={item.title} description={item.description} date={item.date} isColor={index === 1} />
        })}
       </div>
    );
}

export default Card;