import React from "react";
import "./Register.css";
import logo from "../../assets/images/icons/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div id="Register">
      <div className="card__form">
        <div className="login__form__noted">
          <img src={logo} alt="DDDDDDDDDDDDDDDDDD" className="logo__note" />
          <p className="lead__title_form">
            جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید
          </p>
          <p className="lead__title_form">
            قبلا ثبت نام کرده اید؟
            <Link to="/login" className="link__register">
                وارد شوید{" "}
            </Link>
          </p>
        </div>

        <div className="form">
          <div className="form__body">
            <form className="form__w">
              <div className="input_num">
                <label className="form_label_num">موبایل</label>
                <input className="inp_num" />
              </div>
              <div className="input_pass">
                <label className="form_label_pass">رمز عبور</label>
                <input className="inp_pass" type="password" />
              </div>
              <div className="input_pass">
                <label className="form_label_pass-1">رمز عبور</label>
                <input className="inp_pass" type="password" />
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn_submit_login">
                  وارد شوید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
