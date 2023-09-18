
function CardsItem({title, description, date, color}) {
    return (
        <div className="card-note"  style={{borderColor:color}}>
            <h5 className='title-card'>{title}</h5>
          <div className='descrip'>
            <h6 className='descrip-mtn'>{description}</h6>
            <h6 className='year'>{date}</h6>
            </div>
        </div>
    );
}

export default CardsItem;