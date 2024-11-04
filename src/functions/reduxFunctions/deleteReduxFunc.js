import { deleteUser } from "../../stores/redux/slices/user"; 

const deleteReduxFunc = (dispatch , id) => {
    dispatch(deleteUser(id));
  };

  export default deleteReduxFunc