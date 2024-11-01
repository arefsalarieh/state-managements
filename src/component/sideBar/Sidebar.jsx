import { NavLink } from 'react-router-dom';

const Sidebar = ({setCount}) => {
  return (
    <div className=" w-full mt-10 flex flex-col gap-5 text-center">
      <h2 onClick={()=>setCount(1)} className='text-white border-b-4 w-[70%] mx-auto cursor-pointer mt-10'>Redux</h2>
      <h2 onClick={()=>setCount(2)} className='text-white border-b-4 w-[70%] mx-auto cursor-pointer'>Context</h2>
    </div>
  )
};

export default Sidebar;
