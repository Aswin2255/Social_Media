import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Topbar/Avatar'
import Cards from '../../components/Topbar/Cards'
import Layout from '../../components/Topbar/Layout'

function Notification() {
  return (
    <Layout>
         <h1 className='text-3xl mb-4 text-gray-400'>Notifications</h1>
         <Cards nopading={true}>
          <div className=''>
          <div className='flex gap-2 items-center border-b border-b-gray-100 p-4'>
                <Avatar/>
                <div>
                <Link className='font-semibold hover:underline' to={'/profile'}>User</Link>  liked your <Link className='text-socialblue' to={'/post'}>Photo</Link>
                </div>
            </div>
            <div className='flex gap-3 items-center border-b border-b-gray-100 p-4'>
                <Avatar/>
                <div>
                <Link className='font-semibold hover:underline' to={'/profile'}>User</Link>  liked your <Link className='text-socialblue' to={'/post'}>Photo</Link>
                </div>
            </div>
            <div className='flex gap-3 items-center border-b border-b-gray-100 p-4 '>
                <Avatar/>
                <div>
                <Link className='font-semibold hover:underline' to={'/profile'}>User</Link>  liked your <Link className='text-socialblue' to={'/post'}>Photo</Link>
                </div>
            </div>
          </div>
         </Cards>

    </Layout>
  )
}

export default Notification
