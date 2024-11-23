import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../../../customModal/customModal";
import CustomReduxForm from "../../common/customReduxForm/customReduxForm";
import { updateUser } from "../../../../stores/redux/slices/user"; 


const UpdateSimpleRedux = ({id ,setOpen}) => {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const user = store.user.find(item=> item.id ===id)

    const handleUpdateRedux = (values) =>{
      dispatch(updateUser(values))
      setOpen(false)
    }
  


  return (
    <div>
        <CustomModal setOpen={setOpen}>
            <CustomReduxForm habdleSubmit={handleUpdateRedux}  text='update user' id={user.id} name={user.name} email={user.email}  phoneNumber={user.phoneNumber} />

        </CustomModal>
    </div>
  )
}

export default UpdateSimpleRedux