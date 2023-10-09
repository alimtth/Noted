import "./Register.css";
import logo from "../../assets/images/icons/logo.svg";
import { Link, useSubmit } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { httpServis } from "@/core/http-servis";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const submitForm = useSubmit();
  const onSubmit = (data) => console.log(data);
  ``;

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
            <form className="form__w" onSubmit={handleSubmit(onSubmit)}>
              <div className="input_num">
                <label className="form_label_num">موبایل</label>
                <input
                  {...register("mobile", {
                    required: "شماره موبایل الزامی است",
                    minLength: 11,
                    maxLength: 11,
                  })}
                  className={`inp_num1 ${errors.mobile && "is-invlid"}`}
                />

                {errors.mobile && errors.mobile.type === "required" && (
                  <h6>{errors.mobile.message}</h6>
                )}
              </div>
              <div className="input_pass">
                <label className="form_label_pass">رمز عبور</label>
                <input
                  className={`inp_pass ${errors.pass && "is-invlid"}`}
                  type="password"
                  {...register("pass", { required: "رمز عبور اشتباه است" })}
                />
                {errors.pass && errors.pass.type === "required" && (
                  <h5>{errors.pass.message}</h5>
                )}
              </div>
              <div className="input_pass">
                <label className="form_label_pass-1">رمز عبور</label>
                <input
                  className={`inp_pass ${errors.pass && "is-invlid"}`}
                  type="password"
                  {...register("confirmPass", {
                    required: "تکرار رمز عبور الزامی است",
                    validate: (value) => {
                      if (watch("pass") !== value) {
                        return "عدم تطابق رمز عبور";
                      }
                    },
                  })}
                />
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

// export async function registerAction({request}) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const res = await httpServis.post('/User', data);
//   return res.status === 200;
// }
