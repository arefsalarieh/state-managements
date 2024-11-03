import { StrictMode, useReducer, useState } from "react";
import { Provider } from "react-redux";
import store from "../../../stores/redux/store";
import contextStore from "../../../stores/context/contextData";
import App from "../../../App";

const initialState = [
  { id: 1, name: "apple", color: "black", cost: 1000000 },
  { id: 2, name: "lenovo", color: "white", cost: 500000 },
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
  const [TechList, setTechList] = useState([
    {id:1 , name:'react' , desc:'a good mini framework'},
    {id:2 , name:'next' , desc:'a good framework'},
  ]);
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
