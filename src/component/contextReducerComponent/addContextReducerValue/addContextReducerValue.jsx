import { useContext } from "react";
import contextStore from "../../../stores/context/contextData";
import ContextReducerForm from "../contextReducerForm/contextReducerForm";
import addContextReducerFunc from "../../../functions/contextReducerFunction/addContextReducerFunc";

const AddContextReducerValue = () => {
    const {LaptopList, dispatch} = useContext(contextStore)

    const handleAddContextReducer = (values) =>{
      addContextReducerFunc( values , dispatch) 
    }

  return (
    <div className=" mx-auto  ">
    <div className=" mt-10 p-6">
      <h2 className="font-bold text-2xl mt-5 text-center">
        {" "}
        Add Context-Reducer Value{" "}
      </h2>

      <ContextReducerForm  func={handleAddContextReducer}  text=' Add a new laptop'/>
    </div>
  </div>
  )
}

export default AddContextReducerValue