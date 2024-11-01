import React, { useState } from 'react'
import Sidebar from '../../component/sideBar/Sidebar';
import AddReduxValue from '../../component/reduxComponent/addReduxValue/addReduxValue';
import AddContextValue from '../../component/contextComponent/addContextValue/addContextValue';

const ChangeValue = () => {
  const [Count, setCount] = useState(1);

  return (
    <div className='  border-2 border-t min-h-[640px] bg-orange-100'>
    <div className='flex min-h-[500px] w-10/12 mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl'>
        <div className='w-[20%] bg-[#01CEC9]'>
            <Sidebar setCount={setCount}/>
        </div>
        <div  className='w-[80%] border bg-gray-100'>
            {Count === 1 && <AddReduxValue/>}
            {Count === 2 && <AddContextValue/>}
        </div>
    </div> 
</div>
  )
}

export default ChangeValue