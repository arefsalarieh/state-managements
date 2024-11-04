import { Field, Form, Formik } from "formik";

const ZustandForm = ({habdleSubmit , name , color , cost , text}) => {
  return (
    <div>
      <div className="m-5 flex justify-around gap-5 border-2 w-[80%] py-10 bg-red-400 mx-auto rounded-2xl mt-5">
        <Formik
          initialValues={{ name: name, color: color, cost: cost }}
          className="border-2 "
          onSubmit={habdleSubmit}
        >
          <Form className="flex flex-col gap-10">
            <h2 className="font-semibold text-lg  text-center">
              {text}
            </h2>

            <div>
              <Field  className='input input-bordered' type="text" name="name" placeholder="name" />
            </div>

            <div>
               <Field  className='input input-bordered' type="text" name="color" placeholder="color" />
            </div>

            <div>
              
              <Field  className='input input-bordered' type="text" name="cost" placeholder="cost" />
            </div>

            <button type="submit" className="bg-blue-400 w-fit mx-auto p-2">
              click
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default ZustandForm