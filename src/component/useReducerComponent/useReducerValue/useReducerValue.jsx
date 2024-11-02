import { useReducer, useState } from "react";
import AnimalCard from "../animalCard/animalCard";
import AddReducer from '../addReducer/addReducer'

const initialState = [
  { id: 1, name: "dog", color: "black", cost: 1000000 },
  { id: 2, name: "cat", color: "white", cost: 500000 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      const newArr = state.filter((item) => item.id !== action.payload);
      return newArr;

    case 'create':
      const createArr = [...state , action.payload]
      return createArr 
  }
};

const UseReducerValue = () => {
  const [Open, setOpen] = useState(false);
  const [List, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-gray-100   mx-auto border">
      <h2 className="font-bold text-2xl mt-5 text-center">
        {" "}
        UseReducer Value{" "}
      </h2>
      <h2 className="font-semibold text-xl text-center">animal list</h2>
      <p className=" text-center">
        Usually, we do not define such a state in UseReducer, and this project
        is only for practicing a more complex logic.
      </p>

      <div className="flex p-5 gap-5 flex-wrap justify-between mt-5">
        {List?.map((item) => {
          return (
            <AnimalCard item={item} setOpen={setOpen} dispatch={dispatch} />
          );
        })}

        {/* {Open !== false && <UpdateContext id={Open && Open} setOpen={setOpen} />} */}
      </div>

      <AddReducer  dispatch={dispatch} />
    </div>
  );
};

export default UseReducerValue;
