import React, { useState } from 'react'
import Sidebar from '../../component/sideBar/Sidebar';
import AddReduxValue from '../../component/addReduxValue/addReduxValue';

const ChangeValue = () => {
  const [Count, setCount] = useState(1);

  return (
    <div className='  border-2 border-t bg-orange-100'>
    <div className='flex   w-10/12 mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl'>
        <div className='w-[20%] bg-[#01CEC9]'>
            <Sidebar/>
        </div>
        <div  className='w-[80%] border bg-gray-100'>
            {Count === 1 && <AddReduxValue/>}
        </div>
    </div> 
</div>
  )
}

export default ChangeValue