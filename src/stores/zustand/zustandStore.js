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

  },

  addClothes: (value) => {
    set((state) => {
      return ({clothes : [...state.clothes , value]})
    })
  },

  updateClothes: (value , id) => {
    set((state) => {
      const newArr = state.clothes.map(item=>{
        if (item.id === id) {
          return { id: id, ...value };
        } else if (item.id !== id) {
          return item;
        }
      })
      return ({clothes : newArr})
    })
  },  

  // updateBears: (newBears) => set({ bears: newBears }),
}))

