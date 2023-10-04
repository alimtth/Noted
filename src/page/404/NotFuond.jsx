import "./404.css"
import notfound from "../../assets/images/icons/20602801_6324726.svg"
import { Link } from "react-router-dom";
function NotFuond() {
    return (
        <div>    
            <div className='container__404'>
             <Link to="/" className="back_btn_home">
                <button className="back__btn__home">رفتن به صفحه اصلی</button>
            </Link>
             <img src={notfound} className="img__404" alt="" />
            </div>
        </div>
    );
}

export default NotFuond;