import React from 'react'

const ReduxHeader = ({Count, setCount}) => {
  return (
    <div className='bg-[#01CEC9] w-fit p-2 flex gap-4 mx-auto px-10 my-4 rounded-xl'>
        <button onClick={()=>setCount(1)} className={`${Count===1 ? 'bg-gray-500 text-white' :'bg-white'}  p-1 rounded-2xl`}>simple redux</button>
        <button onClick={()=>setCount(2)} className={`${Count===2 ? 'bg-gray-500 text-white' :'bg-white'}  p-1 rounded-2xl`}>createAsyncThunc</button>
    </div>
  )
}

export default ReduxHeader