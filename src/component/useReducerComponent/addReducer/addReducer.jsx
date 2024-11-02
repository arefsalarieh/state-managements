import React from 'react'
import ReducerForm from '../reducerForm/reducerForm'

const AddReducer = ({ dispatch }) => {

  const handleAddReducer = (values) => {
    dispatch({type:'create' , payload : values})

  }

  return (
    <div>
        <ReducerForm  func={handleAddReducer} />
    </div>
  )
}

export default AddReducer