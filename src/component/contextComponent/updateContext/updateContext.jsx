import contextStore from "../../../stores/context/contextData";
import { useContext, useState } from "react";
import CustomModal from "../../customModal/customModal";
import ContextForm from "../contextForm/contextForm";
import updateContextFunc from "../../../functions/contextFunctions/UpdateContextFunc";

const UpdateContext = ({ id, setOpen }) => {
  const { TechList, setTechList } = useContext(contextStore);
  const techDetail = TechList.find(item => item.id ===id)


  const handleUpdateContext = (values) => {
    updateContextFunc(values ,TechList , setTechList , id , setOpen )
  };
  
  return (
    <div>
      <CustomModal setOpen={setOpen}>
        <ContextForm func={handleUpdateContext}  text='update technology' name={techDetail.name} desc={techDetail.desc} />
      </CustomModal>
    </div>
  );
};

export default UpdateContext;
