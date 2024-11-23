import React from 'react'
import CustomReduxForm from '../../common/customReduxForm/customReduxForm'
import { useDispatch } from 'react-redux'
import { addUserWithApi } from '../../../../stores/redux/userApiSlice/userAction'


const AddReduxWithApi = () => {
    const dispatch = useDispatch()


    const handleAddReduxWithApi = (values) =>{
        values.active = true
        dispatch(addUserWithApi(values))
    }
  return (
    <CustomReduxForm habdleSubmit={handleAddReduxWithApi} text="Add user with createAsyncThunc" />
  )
}

export default AddReduxWithApi