import contextStore from "../../../stores/context/contextData";
import { useContext, useState } from "react";
import CustomModal from "../../customModal/customModal";
import ContextForm from "../contextForm/contextForm";

const UpdateContext = ({ id, setOpen }) => {
  const { TechList, setTechList } = useContext(contextStore);
  const techDetail = TechList.find(item => item.id ===id)
  console.log(techDetail);

  const handleUpdateContext = (values) => {
    const newArr = TechList.map((item) => {
      if (item.id === id) {
        return { id: id, ...values };
      } else {
        return item;
      }
    });

    setTechList(newArr);
    setOpen(false);
  };
  return (
    <div>
      <CustomModal setOpen={setOpen}>
        <ContextForm func={handleUpdateContext} name={techDetail.name} desc={techDetail.desc} />
      </CustomModal>
    </div>
  );
};

export default UpdateContext;
