import './Card.css'
function Card() {
    return (
        <>
        <div className='card-note'>
        <div >
            <h5 className='title-card'>خلاصه جلسه ۱۲ صدکدرز</h5>
        </div>
          <div className='descrip'>
            <h6 className='descrip-mtn'>دیزاین یه ماشین حساب رو...</h6>
            <h6 className='year'>۱۸ شهریور ۱۴۰۲</h6>
            </div>
        </div>
        <div className='card-note-1'>
        <div >
            <h5 className='title-card'>کتاب هایی که میخواهم بخونم</h5>
        </div>
          <div className='descrip'>
            <h6 className='descrip-mtn'>کتابخونه نمیشه شب...</h6>
            <h6 className='year'>۱ شهریور ۱۴۰۲</h6>
            </div>
        </div>
        <div className='card-note-2'>
        <div >
            <h5 className='title-card'>هدف من برای سال حدید</h5>
        </div>
          <div className='descrip'>
            <h6 className='descrip-mtn'>اولین هدفم اینکه بتونم...</h6>
            <h6 className='year'>۲ فروردین ۱۴۰۲</h6>
            </div>
        </div>
        
        </>
    );
}

export default Card;