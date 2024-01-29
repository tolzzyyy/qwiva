import React from 'react'
import { RiMessage2Fill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className='w-full h-screen flex overflow-hidden'>
        <div className='w-5/12'>
            <div className='w-full h-screen bg-gradient-to-bl from-purple-500 to-blue-500 flex flex-col py-10 pl-10'>
                <div className='flex gap-2 items-center'>
                    <div className='bg-white w-[50px] h-[50px] rounded-[12px]'></div>
                    <div class="text-white text-[38.77px] font-bold font-['Inter'] leading-[52.73px]">Stryke</div>
                </div>
                <div className='flex flex-col gap-5 pl-[50px] pr-[100px] mt-[100px]'>
                    <h3 class="text-white text-[40px] font-bold">Let's build something amazing today.</h3>
                    <p class="w-[420px] text-white text-lg font-normal font-['Inter'] leading-[30px]">Maybe some text here will help me see it better. Oh God. Oke, let's do it then.</p>
                </div>
            </div>
            <div class="w-20 h-20 top-[30rem] left-10 absolute bg-gradient-to-bl from-yellow-300 to-red-400 rounded-full flex items-center justify-center">
                <RiMessage2Fill size={30} className='text-white'/>
            </div>
            <div class="w-[170px] h-[170px] bg-[#8DEDF7] rounded-full absolute top-[31rem] left-80"></div>
        </div>
        <div className='w-7/12'>
            <div className='w-full h-screen px-10 flex flex-col'>
                <div className='w-full h-[800px] flex justify-center items-center'>
                    <div className='w-[250px] flex flex-col gap-[30px]'>
                        <div className='text-[25px]'>👋</div>
                        <div className='flex flex-col gap-3'>
                            <div class="w-[423px] text-zinc-800 text-[25px] font-semibold font-['Inter'] leading-[38.09px]">Welcome back!</div>
                            <div class="w-[423px] text-zinc-800 text-base font-normal font-['Inter'] leading-relaxed">Let's build someting great</div>
                        </div>
                        <div className='flex flex-col pt-[20px] gap-9'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[14px] text-[#425466]'>E-mail or phone number</p>
                                <input type="text" placeholder='Type your e-mail or phone number' className='w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none'/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[14px] text-[#425466]'>Password</p>
                                <input type="text" placeholder='' className='w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none'/>
                            </div>
                            <button className='w-[280px] py-3 bg-[#4C6FFF] text-white font-semibold text-sm rounded-[10px]'>Sign In</button>
                        </div>
                        <div className='flex flex-col items-center gap-[30px]'>
                            <div class="text-center text-slate-500 text-[10px] font-normal font-['Inter']">or do it via other accounts</div>
                            <div className='flex gap-5'>
                                <div className='w-[50px] h-[50px] shadow rounded-[5px] flex items-center justify-center cursor-pointer'>
                                    <FcGoogle size={24}/>
                                </div>
                                <div className='w-[50px] h-[50px] shadow rounded-[5px] flex items-center justify-center cursor-pointer'>
                                    <FaApple size={24}/>
                                </div>
                                <div className='w-[50px] h-[50px] shadow rounded-[5px] flex items-center justify-center cursor-pointer'>
                                    <FaFacebookF size={24}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[100px] flex items-center'>
                    <div className='text-slate-600 w-full flex justify-end'>Don't have an account? <span className='text-blue-500'>Get started</span> </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
