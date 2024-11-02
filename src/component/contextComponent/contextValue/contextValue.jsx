import contextStore from "../../../stores/context/contextData";
import { useContext, useState } from "react";
import TechnologyCard from "../technologyCard/technologyCard";
import UpdateContext from "../updateContext/updateContext";


const ContextValue = () => {
  const [Open, setOpen] = useState(false);
    const context = useContext(contextStore)


  return (
    <div className="bg-gray-100   mx-auto border">
      <h2 className="font-bold text-2xl mt-5 text-center"> Context Value </h2>
      <h2 className="font-semibold text-xl text-center">technology list</h2>
      <p className=" text-center">
        Usually, we do not define such a state in Context, and this project is
        only for practicing a more complex logic.
      </p>

      <div className="flex p-5 gap-5 flex-wrap justify-between">
        {context.TechList.map((item, index) => {
          return (
            <TechnologyCard item={item} setOpen={setOpen}/>
          );
        })}

        {/* {Open !== false && <TechnologyModal id={Open && Open} setOpen={setOpen} />} */}
        {Open !== false && <UpdateContext id={Open && Open} setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default ContextValue;
