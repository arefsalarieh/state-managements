import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../../stores/redux/slices/user";
import CustomReduxForm from "../../common/customReduxForm/customReduxForm";
import AddSimpleRedux from "../../simpleRedux/addSimpleRedux/addSimpleRedux";

const AddReduxValue = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddRedux = (values) => {
    const id = Math.random();
    dispatch(addUser({ ...values, id }));
  };

  return (
    <div className=" mx-auto  ">
        <AddSimpleRedux/>
    </div>
  );
};

export default AddReduxValue;
