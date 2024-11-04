import contextStore from "../../../stores/context/contextData";
import { useContext, useState } from "react";
import CustomModal from "../../customModal/customModal";
import ContextReducerForm from './../contextReducerForm/contextReducerForm';
import updateContextReducerFunc from "../../../functions/contextReducerFunction/updateContextReducerFunc";

const UpdateContextReducer = ({ id, setOpen }) => {
    const { LaptopList, dispatch } = useContext(contextStore);
    const laptopDetail = LaptopList.find(item => item.id ===id)

    const handleUpdateContextReducer = (values) => {
      updateContextReducerFunc(id , dispatch , setOpen , values) 
    }
  return (
    <div>
      <CustomModal setOpen={setOpen}>
        <ContextReducerForm  func={handleUpdateContextReducer} name={laptopDetail.name} cost={laptopDetail.cost}/>
      </CustomModal>
    </div>
  )
}

export default UpdateContextReducer