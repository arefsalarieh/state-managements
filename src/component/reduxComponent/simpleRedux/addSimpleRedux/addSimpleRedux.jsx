import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../../stores/redux/slices/user";
import CustomReduxForm from "../../common/customReduxForm/customReduxForm";

const AddSimpleRedux = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddRedux = (values) => {
    const id = Math.random();
    dispatch(addUser({ ...values, id }));
  };

  return (
        <CustomReduxForm habdleSubmit={handleAddRedux} text="Add a new user" />
  );
};

export default AddSimpleRedux;
