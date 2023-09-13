
function CardsItem(props) {
    return (
        <div className={props.isColor ? "card-note-1" : "card-note"}>
            <h5 className='title-card'>{props.title}</h5>
          <div className='descrip'>
            <h6 className='descrip-mtn'>{props.description}</h6>
            <h6 className='year'>{props.date}</h6>
            </div>
        </div>
    );
}

export default CardsItem;