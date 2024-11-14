import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: 1,
      name: "aref salarieh",
      email: "arefsalarieh@gmail.com",
      phoneNumber: "+989351390246",
    },
    {
      id: 2,
      name: "salarieh aref ",
      email: "salarieharef@gmail.com",
      phoneNumber: "+989351390246",
    },    
  ],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    deleteUser: (state, action) => {
      const newArr = state.filter((item) => {
        return item.id !== action.payload;
      });

      state.splice(0, state.length, ...newArr);
    },

    updateUser: (state, action) => {
      console.log(action.payload);
      const newArr = state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload
        } else  {
          return item;
        }
      });
      
      state.splice(0, state.length, ...newArr);
    },
  },
});

export const { addUser, deleteUser , updateUser} = userSlice.actions;

export default userSlice.reducer;
