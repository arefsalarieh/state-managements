import React, { useContext, useState } from 'react'
import contextStore from '../../../stores/context/contextData';
import LaptopCard from '../laptopCard/laptopCard';
import UpdateContextReducer from '../updateContextReducer/updateContextReducer';


const ContextReducerValue = () => {
    const [Open, setOpen] = useState(false);
    const {LaptopList , dispatch} = useContext(contextStore)
  return (
    <div className="bg-gray-100   mx-auto border">
    <h2 className="font-bold text-2xl mt-5 text-center"> Context with useReducer Value </h2>
    <h2 className="font-semibold text-xl text-center">animal list</h2>
    <p className=" text-center">
      Usually, we do not define such a state in Context with useReducer, and this project is
      only for practicing a more complex logic.
    </p>

    <div className="flex p-5 gap-5 flex-wrap justify-between">
      {LaptopList.map((item, index) => {
        return (
          <LaptopCard item={item} setOpen={setOpen}  dispatch={dispatch}/>
        );
      })}


      {Open !== false && <UpdateContextReducer id={Open && Open} setOpen={setOpen} />}
    </div>
  </div>
  )
}

export default ContextReducerValue