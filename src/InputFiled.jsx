const InputFiled = ({ formik, data }) => {
  const { label, name, type } = data;

  const bsClass = name === "terms" ? "form-check-input me-3" : "form-control";

  const wrapperClass =
    name === "terms" ? "d-flex flex-row-reverse justify-content-end gap-2" : "";
  return (
    <div className={wrapperClass}>
      <label className="form-label text-white">{label}</label>
      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        className={`${bsClass} ${
          formik.errors[name] && formik.touched[name] && "is-invalid"
        }`}
        type={type}
      />
      <div className="feedback">{formik.errors[name]} &nbsp;</div>
    </div>
  );
};

export default InputFiled;
