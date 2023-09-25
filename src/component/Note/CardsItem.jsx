
function CardsItem({title, description, date, color, selected, event}) {
    const styl = {
        borderColor : color,
        backgroundColor: selected ? "white" : "#fcf1e3",
    }

    return (
        <div className="card__parent">
        <div className="card-note" style={styl} onClick={event}>
            <h5 className='title-card'>{title}</h5>
          <div className='descrip'>
            <h6 className='descrip-mtn'>{description}</h6>
            <h6 className='year'>{date}</h6>
            </div>
        </div>
        </div>
    );
}

export default CardsItem;