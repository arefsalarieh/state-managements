import { useContext } from "react";
import contextStore from "../../../stores/context/contextData";
import ContextReducerForm from "../contextReducerForm/contextReducerForm";

const AddContextReducerValue = () => {
    const {LaptopList, dispatch} = useContext(contextStore)

    const addContextReducerFunc = (values) =>{
        const obj = {id:Math.random() , ...values}
        dispatch({type:'create' , payload : obj})
    }

  return (
    <div className=" mx-auto  ">
    <div className=" mt-10 p-6">
      <h2 className="font-bold text-2xl mt-5 text-center">
        {" "}
        Add Context Value{" "}
      </h2>

      <ContextReducerForm  func={addContextReducerFunc}/>
    </div>
  </div>
  )
}

export default AddContextReducerValue