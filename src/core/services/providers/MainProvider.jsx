import { StrictMode, useState } from "react";
import { Provider } from "react-redux";
import store from "../../../stores/redux/store";
import contextStore from "../../../stores/context/contextData";
import App from "../../../App";

const MainProvider = () => {
  const [TechList, setTechList] = useState([
    {id:1 , name:'react' , desc:'a good mini framework'}
  ]);
  return (
    <StrictMode>
      <contextStore.Provider value={{TechList , setTechList}}>
        <Provider store={store}>
          <App/>
        </Provider>
      </contextStore.Provider>
    </StrictMode>
  );
};

export default MainProvider;
