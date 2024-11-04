import React from "react";
import ContextForm from "../contextForm/contextForm";
import contextStore from "../../../stores/context/contextData";
import { useContext } from "react";
import addContextFunc from "../../../functions/contextFunctions/addContextFunc";

const AddContextValue = () => {
  const { TechList, setTechList } = useContext(contextStore);

  const handleContextAdd = (values) => {
    addContextFunc(values , TechList, setTechList )
  };

  return (
    <div className=" mx-auto  ">
      <div className=" mt-10 p-6">
        <h2 className="font-bold text-2xl mt-5 text-center">
          {" "}
          Add Context Value{" "}
        </h2>

        <ContextForm func={handleContextAdd} />
      </div>
    </div>
  );
};

export default AddContextValue;
