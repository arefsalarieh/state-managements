import contextStore from "../../../stores/context/contextData";
import { useContext, useState } from "react";
import CustomModal from "../../customModal/customModal";
import ContextReducerForm from './../contextReducerForm/contextReducerForm';

const UpdateContextReducer = ({ id, setOpen }) => {
    const { LaptopList, dispatch } = useContext(contextStore);
    const laptopDetail = LaptopList.find(item => item.id ===id)
    console.log(laptopDetail);

    const updateContextReducerFunc = (values) => {
        values.id = id
        console.log(values);
        dispatch({type:'update' , payload : values})
        setOpen(false)

    }
  return (
    <div>
      <CustomModal setOpen={setOpen}>
        <ContextReducerForm  func={updateContextReducerFunc} name={laptopDetail.name} cost={laptopDetail.cost}/>
      </CustomModal>
    </div>
  )
}

export default UpdateContextReducer