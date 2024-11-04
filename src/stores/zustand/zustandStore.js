import { create } from 'zustand'



export const useStore = create((set) => ({
  clothes :[
    {id:1 , name:'shirt' , color:'white' , cost:100000},
    {id:2 , name:'pants' , color:'black' , cost:200000},
  ],

  deleteClothes : (id) =>{
    set((state) => {
      const newArr = state.clothes.filter(item=>item.id !== id)
      return ({clothes : newArr})
    })

  }

  // updateBears: (newBears) => set({ bears: newBears }),
}))

