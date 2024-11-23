import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../../../customModal/customModal";
import CustomReduxForm from "../../common/customReduxForm/customReduxForm";
import { updateUserWithApi } from "../../../../stores/redux/userApiSlice/userAction";

const UpdateReduxWithApi = ({ id, setOpen }) => {
  const dispatch = useDispatch();
  const userApi = useSelector((state) => state.userApi);

  const thisUser = userApi.usersList.find((item) => item.id === id);

  const handleUpdateReduxWithApi = (values) => {
    const newObj = {...thisUser, ...values}
    console.log(newObj);
    dispatch(updateUserWithApi(newObj))
    setOpen(false)
  };
  
  return (
    <div>
      <CustomModal setOpen={setOpen}>
        <CustomReduxForm
          habdleSubmit={handleUpdateReduxWithApi}
          text="update user"
          id={thisUser.id}
          name={thisUser.name}
          email={thisUser.email}
          phoneNumber={thisUser.phoneNumber}
        />
      </CustomModal>
    </div>
  );
};

export default UpdateReduxWithApi;
