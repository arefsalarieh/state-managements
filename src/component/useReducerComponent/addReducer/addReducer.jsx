import React from 'react'
import ReducerForm from '../reducerForm/reducerForm'

const AddReducer = ({ dispatch }) => {

  const handleAddReducer = (values) => {
    const obj = {id:Math.random() , ...values}
    dispatch({type:'create' , payload : obj})

  }

  return (
    <div>
        <ReducerForm  func={handleAddReducer} />
    </div>
  )
}

export default AddReducer