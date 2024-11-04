import React from 'react'
import ReducerForm from '../reducerForm/reducerForm'
import addReducerFunc from '../../../functions/useReducerFuction/addReducerFunc'

const AddReducer = ({ dispatch }) => {

  const handleAddReducer = (values) => {
    addReducerFunc(values ,dispatch )

  }

  return (
    <div>
        <ReducerForm  func={handleAddReducer} />
    </div>
  )
}

export default AddReducer