import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../stores/redux/slices/user";


const AddValue = () => {
  const store = useSelector(state => state)
  const dispatch = useDispatch()



  const handleRedux = (values) =>{
    values.id = Math.random()
    dispatch(addUser(values))
    
  }
  return (
    <div className=" mx-auto  ">
      <div className=" mt-10 p-6">
      <h2 className='font-bold text-2xl mt-5 text-center'> Change Redux Value     </h2>



        <div className="m-5 flex justify-around gap-5 border-2 w-[80%] py-10 bg-[aqua] mx-auto rounded-2xl mt-5">
          <Formik initialValues={{name : store.user.name , email: store.user.email ,phoneNumber:store.user.phoneNumber }} className="border-2 " onSubmit={handleRedux}>
            <Form className="flex flex-col gap-10">
            <h2  className='font-semibold text-lg  text-center'>change user detail</h2>
              
              <div>
                name : <Field type="text" name="name" placeholder="name" />
              </div>

              <div>
                email : <Field type="text" name="email" placeholder="email" />
              </div>

              <div>
              phone :  <Field type="text" name="phoneNumber" placeholder="phoneNumber" />
              </div>
              
              <button type="submit" className="bg-blue-400 w-fit mx-auto p-2">
                click
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddValue;
