import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../stores/redux/slices/user";
import CustomForm from "../customForm/customForm";


const AddValue = () => {
  const store = useSelector(state => state)
  const dispatch = useDispatch()



  const handleRedux = (values) =>{
    const id = Math.random()
    dispatch(addUser({...values , id}))
    
  }
  return (
    <div className=" mx-auto  ">
      <div className=" mt-10 p-6">
      <h2 className='font-bold text-2xl mt-5 text-center'> Change Redux Value     </h2>



    <CustomForm habdleSubmit={handleRedux}/>
      </div>
    </div>
  );
};

export default AddValue;
