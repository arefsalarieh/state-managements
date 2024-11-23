import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const UpdateReduxWithApi = ({id , setOpen}) => {
  const dispatch = useDispatch()
  const userApi = useSelector((state) => state.userApi);

  
  const thisUser = userApi.usersList.find(item => item.id === id)
  console.log(thisUser);

  const handleUpdateReduxWithApi = () =>{

  }
  return (
    <div>{id}</div>
  )
}

export default UpdateReduxWithApi