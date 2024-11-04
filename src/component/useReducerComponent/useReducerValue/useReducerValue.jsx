import { useReducer, useState } from "react";
import AnimalCard from "../animalCard/animalCard";
import AddReducer from '../addReducer/addReducer'
import UpdateReducer from "../updateReducer/updateReducer";
import animallArr from "../../../data/useReducerData/animalArr";
import reducerAnimal from "../../../functions/useReducerFuction/reducerAnimal";


const UseReducerValue = () => {
  const [Open, setOpen] = useState(false);
  const [List, dispatch] = useReducer(reducerAnimal, animallArr);



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

        {Open !== false && <UpdateReducer id={Open && Open} setOpen={setOpen} List={List} dispatch={dispatch}/>}
      </div>

      <AddReducer  dispatch={dispatch} />
    </div>
  );
};

export default UseReducerValue;
