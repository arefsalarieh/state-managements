import React from "react";

const UserCard = ({ item, setOpen, handleDelete }) => {
  return (
    <div className='shadow-2xl rounded-2xl pb-4 w-[30%] bg-gray-300'>
      <div>
        <img src="./img1.png" alt="" className="mx-auto h-1/2" />
      </div>
      <div className="px-4">
        <h2 className="font-bold text-2xl mt-4">
          name : {item.name}
        </h2>

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

        <div className="flex justify-around">
          <div
            className="badge badge-primary p-4 cursor-pointer "
            onClick={() => handleDelete(item.id)}
          >
            delete
          </div>
          <button
            className="btn"
            onClick={() => {
              setOpen(item.id);
            }}
          >
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
