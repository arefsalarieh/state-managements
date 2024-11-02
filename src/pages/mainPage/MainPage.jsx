import React, { useState } from 'react'
import AddReduxValue from '../../component/reduxComponent/addReduxValue/addReduxValue'
import ReduxValue from '../../component/reduxComponent/reduxValue/reduxValue'
import Sidebar from '../../component/sideBar/Sidebar'
import ContextValue from '../../component/contextComponent/contextValue/contextValue'
import UseReducerValue from '../../component/useReducerComponent/useReducerValue/useReducerValue'

const MainPage = () => {
    const [Count, setCount] = useState(1);
  return (
    <div className='  border-2 border-t min-h-[640px] bg-green-100'>
        <div className='flex min-h-[500px] w-10/12 mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl'>
            <div className='w-[20%] bg-[#01CEC9]'>
                <Sidebar setCount={setCount} Count={Count}/>
            </div>
            <div  className='w-[80%] border bg-gray-100 pb-20'>
                {Count === 1 && <ReduxValue/>}
                {Count === 2 && <ContextValue/>}
                {Count === 3 && <UseReducerValue/>}
            </div>
        </div> 
    </div>
  )
}

export default MainPage