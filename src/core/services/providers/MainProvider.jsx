import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "../../../stores/redux/store";
import contextStore from "../../../stores/context/contextData";

const MainProvider = ({ children }) => {
  return (
    <StrictMode>
      <contextStore.Provider value=''>
        <Provider store={store}>
          {children}
        </Provider>
      </contextStore.Provider>
    </StrictMode>
  );
};

export default MainProvider;
