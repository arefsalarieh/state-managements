import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../stores/redux/slices/user";
import CustomForm from "../customForm/customForm";

const CardModal = ({ id , setOpen }) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();







  const updateRedux = (values) => {
    const newArr = store.user.filter(item =>{
      if(item.id !== id){
        return true
      }
    })
    const newObj = {id:id , ...values}
    newArr.push(newObj)

    dispatch(updateUser(newArr))



  };
  return (
    <div >

        <div className="bg-gray-300 opacity-90  h-lvh w-full absolute left-0 top-0">
          <button
            onClick={() => setOpen(false)}
            className="absolute left-4 top-4 bg-white w-10 h-10"
          >
            ✕ {id}
          </button>
          <div className="w-1/2 mx-auto mt-40">
            <CustomForm habdleSubmit={updateRedux}/>

          </div>
        </div>
   
    </div>
  );
};

export default CardModal;
