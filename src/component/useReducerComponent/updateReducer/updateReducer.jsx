import React from "react";
import CustomModal from "../../customModal/customModal";
import ReducerForm from "../reducerForm/reducerForm";
import updateReducerFunc from "../../../functions/useReducerFuction/updateReducerFunc";

const UpdateReducer = ({ id, setOpen, List, dispatch }) => {
  const animal = List.find((item) => item.id === id);

  const handleUpdateReducer = (values) => {
    updateReducerFunc(id, values, setOpen, dispatch);
  };

  return (
    <div>
      <CustomModal setOpen={setOpen}>
        <ReducerForm
          func={handleUpdateReducer}
          name={animal.name}
          color={animal.color}
          cost={animal.cost}
           text='update animal'
        />
      </CustomModal>
    </div>
  );
};

export default UpdateReducer;
