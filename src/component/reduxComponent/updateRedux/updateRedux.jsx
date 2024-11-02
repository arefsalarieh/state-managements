import { useDispatch, useSelector } from "react-redux";
import CustomModal from '../../customModal/customModal'
import CustomForm from "../customForm/customForm";
import { updateUser } from "../../../stores/redux/slices/user";


const UpdateRedux = ({id ,setOpen}) => {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const user = store.user.find(item=> item.id ===id)
  
    const updateRedux = (values) => {
      const newArr = store.user.map(item =>{
        if(item.id === id){
          return {id:id , ...values}
        }
        else if(item.id !== id){
          return item
        }
        
      })
  
      dispatch(updateUser(newArr))
      setOpen(false)
  
    };

  return (
    <div>
        <CustomModal setOpen={setOpen}>
            <CustomForm habdleSubmit={updateRedux} name={user.name} email={user.email}  phoneNumber={user.phoneNumber} />

        </CustomModal>
    </div>
  )
}

export default UpdateRedux