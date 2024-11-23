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