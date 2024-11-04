import { useDispatch, useSelector } from "react-redux";
import CustomModal from '../../customModal/customModal'
import CustomForm from "../customForm/customForm";
import { updateUser } from "../../../stores/redux/slices/user";
import updateReduxFunc from "../../../functions/reduxFunctions/updateReduxFunc";


const UpdateRedux = ({id ,setOpen}) => {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const user = store.user.find(item=> item.id ===id)

    const handleAddRedux = (values) =>{
      updateReduxFunc(values , id ,store , dispatch , setOpen)
    }
  


  return (
    <div>
        <CustomModal setOpen={setOpen}>
            <CustomForm habdleSubmit={handleAddRedux} name={user.name} email={user.email}  phoneNumber={user.phoneNumber} />

        </CustomModal>
    </div>
  )
}

export default UpdateRedux