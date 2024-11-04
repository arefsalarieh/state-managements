const reducerAnimal = (state, action) => {
    switch (action.type) {
      case "delete":
        const newArr = state.filter((item) => item.id !== action.payload);
        return newArr;
  
      case 'create':
        const createArr = [...state , action.payload]
        return createArr 
  
       case 'update':
        const updateArr = state.map(item=>{
          if(item.id !== action.payload.id){
            return item
          }
          else{
            return action.payload
          }
        }) 
        return updateArr
    }
  };

  export default reducerAnimal