import React from "react";

const CustomModal = ({setOpen , children}) => {
  return (
    <div>
      <div className="bg-gray-300 opacity-90  min-h-[735px] w-full absolute left-0 top-0">
        <button
          onClick={() => setOpen(false)}
          className="absolute left-4 top-4 bg-white w-10 h-10"
        >
          ✕ 
        </button>
        <div className="w-1/2 mx-auto mt-40">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
