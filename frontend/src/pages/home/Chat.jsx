import React from 'react'
import Cards from '../../components/Topbar/Cards'
import Layout from '../../components/Topbar/Layout'
import Chathistory from '../../components/Topbar/Chathistory'
import Avatar from '../../components/Topbar/Avatar'
import Chatscreen from '../../components/Topbar/Chatscreen'
import { useSelector } from 'react-redux'

function Chat() {
  const value = useSelector((state)=>{
    return state
  })
  console.log(value)
  return (
    <div>
    <Layout>
        <div className='flex justify-between'>
            <div className='mb-4'>
                <h1 className='text-center m-3'>User</h1>
                <Chathistory/>
                <Chathistory/>
                <Chathistory/>
                <Chathistory/>
            </div>
            <div>
               
            </div>

        </div>
        
        
    </Layout>
    
      
     
     
      
      
        
        
       
     

      </div>
      
    
  )
}

export default Chat
