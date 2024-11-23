import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserWithApi, getUser, realDeleteUser } from '../../../../stores/redux/userApiSlice/userAction';
import UserCard from '../../common/userCard/userCard';
import UpdateReduxWithApi from '../updateReduxWithApi/updateReduxWithApi';

const ReduxWithApiValue = () => {
  const [Open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const userApi = useSelector((state) => state.userApi);

    

    useEffect(() => {
        dispatch(getUser())
    }, []);


    const handleDelete = (id) =>{
        // actualy we dont delete user because i use these users in another project too , i donst delete them just change the activity mode
        const delUser = userApi.usersList.find(item => item.id === id)
        const newUser = {...delUser}
        newUser.deleted = !newUser.deleted
        dispatch(deleteUserWithApi(newUser))


        //real delete
        // dispatch(realDeleteUser(id))
    }

  return (
    <div  className="flex p-5 gap-5 flex-wrap justify-between">
        {userApi.usersList.map(item=>{
            return(
                <>
                {!item.deleted && <UserCard name={item.name} email={item.email} phoneNumber={item.phoneNumber} id={item.id} setOpen={setOpen} handleDelete={handleDelete} />}
                {/* <UserCard name={item.name} email={item.email} phoneNumber={item.phoneNumber} id={item.id} setOpen={setOpen} handleDelete={handleDelete} /> */}
                </>

            )
        })}

        {Open !== false && <UpdateReduxWithApi id={Open && Open} setOpen={setOpen} />}

    </div>
  )
}

export default ReduxWithApiValue