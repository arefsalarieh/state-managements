import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../../stores/redux/slices/user";
import CardModal from "../cardModal/cardModal";
import { useState } from "react";
import UserCard from "../userCard/userCard";

const ReduxValue = () => {
  const [Open, setOpen] = useState(false);
  const [CardId, setCardId] = useState(null);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <div className="bg-gray-100   mx-auto border">
      <h2 className="font-bold text-2xl mt-5 text-center"> Redux Value </h2>
      <h2 className="font-semibold text-xl text-center">user list</h2>
      <p className=" text-center">Usually, we do not define such a state in Redux, and this project is only for practicing a more complex logic.</p>

      <div className="flex p-5 gap-5 flex-wrap justify-between">
        {store.user.map((item, index) => {
          return (
            <UserCard item={item} setOpen={setOpen} handleDelete={handleDelete}/>
          );
        })}

        {Open !== false && <CardModal id={Open && Open} setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default ReduxValue;
