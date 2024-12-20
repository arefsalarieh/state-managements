import { Field, Form, Formik } from "formik";


const CustomForm = ({habdleSubmit , name , email , phoneNumber}) => {
  return (
    <div>
      <div className="m-5 flex justify-around gap-5 border-2 w-[80%] py-10 bg-[aqua] mx-auto rounded-2xl mt-5">
        <Formik
          initialValues={{ name: name, email: email, phoneNumber: phoneNumber }}
          className="border-2 "
          onSubmit={habdleSubmit}
        >
          <Form className="flex flex-col gap-10">
            <h2 className="font-semibold text-lg  text-center">
              change user detail
            </h2>

            <div>
              name : <Field type="text" name="name" placeholder="name" />
            </div>

            <div>
              email : <Field type="text" name="email" placeholder="email" />
            </div>

            <div>
              phone :{" "}
              <Field type="text" name="phoneNumber" placeholder="phoneNumber" />
            </div>

            <button type="submit" className="bg-blue-400 w-fit mx-auto p-2">
              click
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CustomForm;
