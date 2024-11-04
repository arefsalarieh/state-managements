
import { updateUser } from '../../stores/redux/slices/user';


const updateReduxFunc = (values , id ,store , dispatch , setOpen) => {
    console.log(1);
  const newArr = store.user.map((item) => {
    if (item.id === id) {
      return { id: id, ...values };
    } else if (item.id !== id) {
      return item;
    }
  });

  dispatch(updateUser(newArr));
  setOpen(false);
};

export default updateReduxFunc;
