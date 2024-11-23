import { createSlice } from "@reduxjs/toolkit";
import { addUserWithApi, deleteUserWithApi, getUser, realDeleteUser, updateUserWithApi } from "./userAction";


const initState = {
    usersList :[],
    status : '' ,
    error : false
}

const userApiSlice = createSlice({
    name:'apiUser',
    initialState:initState,
    reducers:{},
    extraReducers:builder =>{
        builder.addCase(getUser.fulfilled , (state , action)=>{
            state.usersList = action.payload;
            state.status = 'idle'

        })

        builder.addCase(deleteUserWithApi.fulfilled , (state , action)=>{
            if(action.payload.statusText === 'OK'){
                const newArr = state.usersList.map(item=>{
                    if(item.id === action.payload.data.id){
                        return action.payload.data
                    }else{
                        return item
                    }
                })

                state.usersList = newArr

            }

        })

        builder.addCase(realDeleteUser.fulfilled , (state , action)=>{
            if(action.payload.statusText === 'OK'){
                // console.log('deleteBooks' , action.payload.data.id);
                const newArr = state.usersList.filter(item=>item.id !== action.payload.data.id)
                state.usersList = newArr

            }

        })

        builder.addCase(addUserWithApi.fulfilled , (state , action)=>{
            if(action.payload.statusText === 'Created'){
                const newArr = [...state.usersList , action.payload.data]
                state.usersList = newArr

            }

        })

        builder.addCase(updateUserWithApi.fulfilled , (state , action)=>{
            if(action.payload.statusText === 'OK'){
                const newArr = state.usersList.map(item=>{
                    if(item.id === action.payload.data.id){
                        return action.payload.data
                    }else{
                        return item
                    }
                })

                state.usersList = newArr

            }

        })


    }

    
})


export default userApiSlice.reducer
