import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("userssList/getUserList", async () => {
    try {
      const res = await axios.get(
        "https://671d123d09103098807c2afb.mockapi.io/arefsalarieh/users"
      );
   
      return res.data;
    } catch (err) {
      
      throw err
    }
  });


export const deleteUserWithApi = createAsyncThunk('usersList/delete' , async (values) =>{
  // actualy we dont delete user because i use these users in another project too , i donst delete them just change the activity mode
  try{
    const res = await axios.put(`https://671d123d09103098807c2afb.mockapi.io/arefsalarieh/users/${values.id}` , values)
    return res;

  }catch(err){
    throw err

  }
})

// real delete
export const realDeleteUser = createAsyncThunk("usersList/realDelete", async (id) => {
  try {
    const res = await axios.delete(
      `https://671d123d09103098807c2afb.mockapi.io/arefsalarieh/users/${id}`
    );
    return res;
  } catch (err) {
    
    throw err
  }
});

export const addUserWithApi = createAsyncThunk("usersList/addUser", async (values) => {
  try {
    const res = await axios.post(
      `https://671d123d09103098807c2afb.mockapi.io/arefsalarieh/users` , values
    );
    return res;
  } catch (err) {
    
    throw err
  }
});


export const updateUserWithApi = createAsyncThunk("usersList/updateUser", async (values) => {
  try {
    const res = await axios.put(
      `https://671d123d09103098807c2afb.mockapi.io/arefsalarieh/users/${values.id}` , values
    );
    return res;
  } catch (err) {
    
    throw err
  }
});