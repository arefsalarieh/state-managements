import React from 'react'
import CustomModal from '../../customModal/customModal'
import ReducerForm from '../reducerForm/reducerForm'

const UpdateReducer = ({id , setOpen , dispatch}) => {
    const handleUpdateReducer = (values) => {
        values.id = id
        console.log(values);
        dispatch({type:'update' , payload : values})
        setOpen(false)

    }
  return (
    <div>
        
        <CustomModal  setOpen={setOpen}>
            <ReducerForm func={handleUpdateReducer}/>
        </CustomModal>
    </div>
  )
}

export default UpdateReducer