import { createSlice } from "@reduxjs/toolkit";
import { deleteUserWithApi, getUser } from "./userAction";


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
    }

    
})


export default userApiSlice.reducer
