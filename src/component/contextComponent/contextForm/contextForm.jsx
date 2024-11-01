import { Field, Form, Formik } from "formik";
import contextStore from "../../../stores/context/contextData";
import { useContext } from "react";



const ContextForm = () => {
    const {TechList, setTechList} = useContext(contextStore)
    console.log(TechList);


    const addContext = (values) =>{
        const newObj = {id:Math.random() , ...values}
        setTechList([...TechList , newObj])
    }
  return (
    <div>
    <div className="m-5 flex justify-around gap-5 border-2 w-[80%] py-10 bg-[aqua] mx-auto rounded-2xl mt-5">
      <Formik
        initialValues={{ name: "", desc: "" }}
        className="border-2 "
        onSubmit={addContext}
      >
        <Form className="flex flex-col gap-10">
          <h2 className="font-semibold text-lg  text-center">
            change Technology detail
          </h2>

          <div>
            name : <Field type="text" name="name" placeholder="name" />
          </div>

          <div>
          desc : <Field type="text" name="desc" placeholder="desc" />
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

export default ContextForm