import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../stores/redux/slices/user";
import CustomForm from "../customForm/customForm";
import addReduxFunc from "../../../functions/reduxFunctions/addReduxFunc";

const AddReduxValue = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddRedux = (values) => {
    addReduxFunc(values , dispatch)
  };

  return (
    <div className=" mx-auto  ">
      <div className=" mt-10 p-6">
        <h2 className="font-bold text-2xl mt-5 text-center">
          
          Add Redux Value
        </h2>

        <CustomForm habdleSubmit={handleAddRedux} text='Add a new user' />
      </div>
    </div>
  );
};

export default AddReduxValue;
