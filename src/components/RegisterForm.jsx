import { useFormik } from "formik";
import { registerFormShemas } from "../shemas/RegisterFormShemas";

const RegisterForm = () => {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: registerFormShemas,
    onSubmit: submit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email giriniz..."
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="input-error">{errors.email} </p>}
        </div>

        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı giriniz..."
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p className="input-error">{errors.age} </p>}
        </div>
        <div className="inputDiv">
          <label>Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi giriniz..."
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="input-error">{errors.password} </p>}
        </div>
        <div className="inputDiv">
          <label>Şifre Tekrarı</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Şifrenizi Tekrar giriniz..."
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="input-error">{errors.confirmPassword} </p>
          )}
        </div>
        <div className="inputDiv">
          <div className="checkcboxDiv">
            <input
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
            />
            <label>Kullanıcı sözleşmesini kabul ediyorum</label>
          </div>
          {errors.term && <p className="input-error">{errors.term} </p>}
        </div>
        <button type="submit" className="saveButton">
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
