import { StrictMode, useReducer, useState } from "react";
import { Provider } from "react-redux";
import store from "../../../stores/redux/store";
import contextStore from "../../../stores/context/contextData";
import App from "../../../App";
import contextArr from "../../../data/contextData/contextArr";
import laptopArr from "../../../data/reducerContext/laptopArr";
import reducer from "../../../functions/reducer/reducer";




const MainProvider = () => {
  const [TechList, setTechList] = useState(contextArr);
  const [LaptopList, dispatch] = useReducer(reducer, laptopArr);


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
