import React from 'react'

const TopNav = () => {
  return (
    <nav className='w-full bg-white flex justify-between px-3 items-center ml-[2px] py-4'>

        <h1 className='text-[23px] font-bold'>Dashboard</h1>
        <div className='flex gap-7 items-center pt-1 pr-[60px]'>
        <button className='w-[130px] border-gray-100 rounded-[7px] text-[12px] font-bold h-[34px] border-2'>Download</button>
        <button className='w-[130px] border-gray-100 bg-blue-500 rounded-[8px] text-white text-[13px] font-bold h-[36px] border-2'>Create</button>
        </div>
     
    </nav>
  )
}

export default TopNav