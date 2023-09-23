import './Btn.css'

function Btn({children, onClick, variant, type = "button"}) {
    return (
        <div>
            <button className={`btn-folder btn-folder--${variant}`} onClick={onClick} type={type}>{children}</button>
            {/* <button className='btn-cancel-new-folder'>{props.children}</button> */}
        </div>
    );
}

export default Btn;