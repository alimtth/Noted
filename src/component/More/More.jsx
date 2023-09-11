import './More.css'
import { Star } from 'react-bootstrap-icons';
import { Trash } from 'react-bootstrap-icons';

function More() {
    return (
        <div>
            <h5 className='title-More'>بیشتر</h5>
            <h3 className='title-Mores'><Star className='ali'/>علاقه مندی ها</h3>
            <h3 className='title-Mores'><Trash className='ali'/>حذف شده ها</h3>
        </div>
    );
}

export default More;