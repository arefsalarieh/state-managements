import { StrictMode, useReducer, useState } from "react";
import { Provider } from "react-redux";
import store from "../../../stores/redux/store";
import contextStore from "../../../stores/context/contextData";
import App from "../../../App";
import contextArr from "../../../data/contextData/contextArr";

const initialState = [
  { id: 1, name: "apple", cost: 1000000 },
  { id: 2, name: "lenovo", cost: 500000 },
];

const reducer = (state, action) => {
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

const MainProvider = () => {
  const [TechList, setTechList] = useState(contextArr);

  
  const [LaptopList, dispatch] = useReducer(reducer, initialState);


  return (
    <StrictMode>
      <contextStore.Provider value={{TechList , setTechList , LaptopList , dispatch}}>
        <Provider store={store}>
          <App/>
        </Provider>
      </contextStore.Provider>
    </StrictMode>
  );
};

export default MainProvider;
