import { addUser } from "../../stores/redux/slices/user"; 


const addReduxFunc = (values , dispatch) => {
    const id = Math.random();
    dispatch(addUser({ ...values, id }));
  };

  export default addReduxFunc