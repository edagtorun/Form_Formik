import { useFormik } from "formik";
import { schema } from "./schema";
import InputFiled from "./InputFiled";
import { inputs } from "./constans";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
      terms: false,
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      alert("Form başarıyla gönderildi.");
    },
  });

  return (
    <div className="vh-100 vw-100 bg-dark">
      <div className="container py-5">
        <h2 className="text-center text-white">Coinmania</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((input) => (
            <InputFiled key={input.id} formik={formik} data={input} />
          ))}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
