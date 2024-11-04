import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({Count ,setCount}) => {
  const location = useLocation()
  return (
    <div className=" w-full mt-10 flex flex-col gap-5 text-center">
      <h2 onClick={()=>setCount(1)} className={`${Count ===1 ? `border-green-400 border-b-8 text-xl`: `border-b-4`}  text-white  w-[70%] mx-auto cursor-pointer mt-10`}>Redux</h2>
      <h2 onClick={()=>setCount(2)} className={`${Count ===2 ? `border-green-400 border-b-8  text-xl`: `border-b-4`} text-white  w-[70%] mx-auto cursor-pointer `}>Context</h2>
      {location.pathname !== '/changeValue' &&<h2 onClick={()=>setCount(3)} className={`${Count ===3 ? `border-green-400 border-b-8  text-xl`: `border-b-4`} text-white  w-[70%] mx-auto cursor-pointer `}>UseReducer</h2>}
      <h2 onClick={()=>setCount(4)} className={`${Count ===4 ? `border-green-400 border-b-8  text-xl`: `border-b-4`} text-white  w-[70%] mx-auto cursor-pointer `}>Context And Reducer</h2>   
      <h2 onClick={()=>setCount(5)} className={`${Count ===5 ? `border-green-400 border-b-8  text-xl`: `border-b-4`} text-white  w-[70%] mx-auto cursor-pointer `}>zustand</h2>   
   
    </div>
  )
};

export default Sidebar;
