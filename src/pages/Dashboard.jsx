import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Content/>
    </div>
  )
}

export default Dashboard