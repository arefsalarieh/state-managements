import React from 'react'
import ZustandForm from '../zustandForm/zustandForm'
import { useStore } from '../../../stores/zustand/zustandStore';

const AddZustandValue = () => {
  const addClothes = useStore((state) => state.addClothes);

  const handleAddZustand = (values) =>{
    const obj = {id:Math.random() , ...values};
    addClothes(obj)
  }

  return (
    <div className=" mx-auto  ">
      <div className=" mt-10 p-6">
        <h2 className="font-bold text-2xl mt-5 text-center">
          
          Add Zustand Value
        </h2>

        <ZustandForm habdleSubmit={handleAddZustand} text='Add a new cloth' />
      </div>
    </div>
  )
}

export default AddZustandValue