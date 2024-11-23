import { Field, Form, Formik } from "formik";


const CustomReduxForm = ({habdleSubmit , id , name , email , phoneNumber , text}) => {
  return (
    <div>
      <div className="m-5 flex justify-around gap-5 border-2 w-[80%] py-10 bg-[#f3d46e] mx-auto rounded-2xl mt-5">
        <Formik
          initialValues={{id:id , name: name, email: email, phoneNumber: phoneNumber }}
          className="border-2 "
          onSubmit={habdleSubmit}
        >
          <Form className="flex flex-col gap-10 ">

            <h2 className="font-semibold text-lg w-52 mx-auto  text-center">
              {text}
            </h2>
            <div>
              <Field  className='input input-bordered' type="text" name="name" placeholder="name" />
            </div>

            <div>
               <Field  className='input input-bordered' type="text" name="email" placeholder="email" />
            </div>

            <div>
              
              <Field  className='input input-bordered' type="text" name="phoneNumber" placeholder="phoneNumber" />
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

export default CustomReduxForm;
