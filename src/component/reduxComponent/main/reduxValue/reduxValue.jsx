import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../../../stores/redux/slices/user";
import { useState } from "react";

import ReduxHeader from "../../common/reduxHeader/reduxHeader";
import ReduxWithApiValue from "../../reduxWithApi/reduxWithApiValue/reduxWithApiValue";
import SimpleReduxValue from "../../simpleRedux/simpleReduxValue/simpleReduxValue";

const ReduxValue = () => {
  const [Count, setCount] = useState(2);

  return (
    <div className="bg-gray-100   mx-auto border">
      <h2 className="font-bold text-2xl mt-5 text-center"> Redux Value </h2>
      <h2 className="font-semibold text-xl text-center">user list</h2>
      <p className=" text-center">Usually, we do not define such a state in Redux, and this project is only for practicing a more complex logic.</p>
      <ReduxHeader Count={Count} setCount={setCount}   />
      {Count ===1 && <SimpleReduxValue/>}
      {Count ===2 && <ReduxWithApiValue/>}
    </div>
  );
};

export default ReduxValue;
