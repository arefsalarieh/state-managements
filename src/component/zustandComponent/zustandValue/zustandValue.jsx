import React, { useState } from "react";
import { useStore } from "../../../stores/zustand/zustandStore";
import ClothesCard from "../clothesCard/clothesCard";

const ZustandValue = () => {
  const [Open, setOpen] = useState(false);

  const clothes = useStore((state) => state.clothes);
  const addClothes = useStore((state) => state.addClothes);
  const obj = { id: 3, name: "pants", color: "black", cost: 200000 };

  const add = () => {
    const newClothesItem = {
      id: 3,
      name: "jacket",
      color: "blue",
      cost: 300000,
    };
    addClothes(obj);
  };
  return (
    <div className="bg-gray-100   mx-auto border">
      <button onClick={add}>add</button>
      <h2 className="font-bold text-2xl mt-5 text-center"> Redux Value </h2>
      <h2 className="font-semibold text-xl text-center">user list</h2>
      <p className=" text-center">
        Usually, we do not define such a state in Redux, and this project is
        only for practicing a more complex logic.
      </p>

      <div className="flex p-5 gap-5 flex-wrap justify-between">
        {clothes.map((item, index) => {
          return (
            <ClothesCard
              item={item}
              setOpen={setOpen}
            />
          );
        })}

        {/* {Open !== false && <UpdateRedux id={Open && Open} setOpen={setOpen} />} */}
      </div>
    </div>
  );
};

export default ZustandValue;
