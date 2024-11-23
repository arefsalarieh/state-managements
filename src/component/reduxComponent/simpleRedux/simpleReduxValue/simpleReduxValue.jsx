import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../../../stores/redux/slices/user";
import { useState } from "react";
import UserCard from "../../common/userCard/userCard";
import UpdateSimpleRedux from "../updateSimpleRedux/updateSimpleRedux"; 


const SimpleReduxValue = () => {
  const [Open, setOpen] = useState(false);

    const store = useSelector((state) => state);
    const dispatch = useDispatch();
  
    const handleDelete = (id) => {
      dispatch(deleteUser(id));
    };

  return (
      <div className="flex p-5 gap-5 flex-wrap justify-between">
        {store.user.map((item, index) => {
          return (
            <UserCard name={item.name} email={item.email} phoneNumber={item.phoneNumber} id={item.id} setOpen={setOpen} handleDelete={handleDelete}/>
          );
        })}

        {Open !== false && <UpdateSimpleRedux id={Open && Open} setOpen={setOpen} />}
      </div>
  )
}

export default SimpleReduxValue