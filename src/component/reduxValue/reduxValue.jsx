import { useSelector , useDispatch } from "react-redux";
import { deleteUser } from "../../stores/redux/slices/user";


const ReduxValue = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch()
  

  const handleDelete = (id) =>{
    dispatch(deleteUser(id))
  }
  return (
    <div className="bg-gray-100   mx-auto border">
      <h2 className="font-bold text-2xl mt-5 text-center"> Redux Value </h2>
      <h2 className="font-semibold text-lg text-center">user list</h2>

      <div className="flex p-5 gap-5 flex-wrap justify-between">
        {store.user.map((item, index) => {
          return (
            <div className={`shadow-2xl rounded-2xl pb-4 w-[30%] bg-gray-300 `}>
              <div>
                <img src="./img1.png" alt="" className="mx-auto h-1/2" />
              </div>
              <div className="px-4">
                <h2 className="font-bold text-2xl mt-4">name : {item.name}</h2>

                <div className="flex justify-between mt-6 "></div>

                <div className="my-1">
                  <h2 className="font-bold text-lg ">
                    email :<h2>{item.email}</h2>
                  </h2>
                </div>

                <div className="my-3">
                  <h2 className="font-bold text-lg ">
                  phoneNumber :<h2>{item.phoneNumber}</h2>
                  </h2>
                </div>

                  <div className="badge badge-primary p-4 cursor-pointer " onClick={()=>handleDelete(item.id)}>
                    delete
                  </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReduxValue;
