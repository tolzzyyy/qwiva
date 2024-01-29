import React from 'react'
import { RxHome } from "react-icons/rx";
import { BsListStars } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import Link from 'next/link';



const SideNav = () => {
  return (
    <div className='lg:flex hidden 
    flex-col md:h-full  xl:h-screen py-[19px] overflow-y-hidden  px-4 bg-white '>
        <div className='flex  items-center gap-1 '>
     <img src="/images/Logo.png" alt="" />
     <img src="/images/page.png" alt="" />
     
     </div>

     <div className='  font-medium text-[14px]   flex flex-col gap-3 justify-center mt-6'>
     <div className='flex items-center gap-6'><RxHome className='text-gray-500' size={20} /><h1 className='hover:text-blue-500'>Dashboard</h1></div>
    <div className='flex items-center gap-6'> <BsListStars className='text-gray-500' size={20} /> <h1 className='hover:text-blue-500'>Project</h1></div>
     <div className='flex items-center gap-6'><BiMessageRounded className='text-gray-500' size={20} /><h1 className='hover:text-blue-500'>Messages</h1></div>
     <div className='flex items-center gap-6'><MdOutlineHomeRepairService  className='text-gray-500' size={20} /><h1 className='hover:text-blue-500'>Services</h1></div>
     <div className='flex items-center gap-6'><BsPeople  className='text-gray-500' size={20} /><h1 className='hover:text-blue-500'>Customers</h1> </div>
     </div>
     <div className='w-full border-b-2 pt-6'></div>

     <div>
        <div className='flex pt-5 items-center gap-5'>
            <h1 className='text-[12px] font-medium '>CONTACTS</h1>  <div className='w-[28px] bg-[#E1E8FF] font-bold text-[12px] flex items-center text-medium text-blue-500 justify-center rounded-full'>6</div>
        </div>

        <div className='flex flex-col pt-6 gap-3 '>
            <div className='flex items-center justify-between gap-3'>
            <div className='flex gap-2 items-center  text-[12px]'>
                <img src="/images/x-avatar.png" alt="" /> <div className='flex flex-col'><p className='font-bold'>Marie Claire</p> <p>paris, FR</p> </div>
            </div>
            <div> <BiMessageRounded className='text-blue-500 pl-3' size={35} /></div>
            </div>
            <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center  w-[190px]  text-[12px]'>
                <img src="/images/micheal.png" alt="" /> <div className='flex flex-col'><p className='font-bold'>Micheal jordan</p> <p>Bucharest, FR</p></div>
            </div>
            <div><BiMessageRounded className='text-blue-500 pl-3  ' size={35} /></div>
            </div>
            <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center   text-[12px]'>
                <img src="/images/x-avatar.png" alt="" /> <div className='flex flex-col'><p className='font-bold'>Heather Wright</p> <p>London, UK</p></div>
            </div>
            <div><BiMessageRounded className='text-blue-500 pl-3' size={35} /></div>
            </div>
        </div>
     </div>


     <div className='mt-[60px] flex flex-col gap-2 '>
        <div className='flex items-center gap-4'>
         <img src="/images/icon.png" className='w-[20px] text-gray-500' alt="" />
         <h1 className='text-[14px] font-medium'>Account</h1>
        </div>
        <div className='flex items-center gap-4'>
         <img src="/images/icon2.png" className='w-[20px] text-gray-500' alt="" />
         <Link href='/login' className='text-[14px] font-medium'>Logout</Link>
        </div>
     </div>
    </div>
  )
}

export default SideNav
