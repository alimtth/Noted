import "./404.css"
import notfound from "../../assets/images/icons/20602801_6324726.svg"
function NotFuond() {
    return (
        <div>
            <div className='container__404'>
             <img src={notfound} className="img__404" alt="" />
            </div>
        </div>
    );
}

export default NotFuond;