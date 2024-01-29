import React from 'react'
import SideNav from './SideNav'
import Body from './Body'
import NavBar from './NavBar'

const Dashboard = () => {
  return (
    <div className='w-full flex  justify-between'>
        <div className='md:w-2/12 '>
      <SideNav/>
      </div>
        <div className='md:w-10/12 w-full '>
      <Body/>
      </div>
    
    </div>
  )
}

export default Dashboard
