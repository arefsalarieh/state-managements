
import AddSimpleRedux from "../../simpleRedux/addSimpleRedux/addSimpleRedux";
import { useState } from "react";
import ReduxHeader from "../../common/reduxHeader/reduxHeader";
import AddReduxWithApi from "../../reduxWithApi/addReduxWithApi/addReduxWithApi";

const AddReduxValue = () => {
  const [Count, setCount] = useState(1);


  return (
    <div className=" mx-auto  ">
      <div className=" mt-10 p-6">
        <h2 className="font-bold text-2xl mt-5 text-center">Add Redux Value</h2>
        <ReduxHeader Count={Count} setCount={setCount}   />
        {Count ===1 && <AddSimpleRedux/>}
        {Count ===2 && <AddReduxWithApi/>}
      </div>
    </div>
  );
};

export default AddReduxValue;
