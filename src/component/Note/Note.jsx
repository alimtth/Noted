import './Note.css'
import Card from './Card/Card';

function Note() {
    return (
        <div className='note'>
            <div className='parent'>
                <h2 className='title-note'>همه یادداشت ها</h2>

            </div>
            <div>
                <Card></Card>
            </div>
        </div>
    );
}

export default Note;