import React from 'react'
import Createpost from '../../components/Topbar/Createpost'
import Layout from '../../components/Topbar/Layout'

import Post from '../../components/Topbar/Post'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../../Axios'
import { useDispatch, useSelector } from 'react-redux'


function Home() {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
 
  const [cookie,setcookie,removeCookie] = useCookies([])
  console.log(cookie)
  useEffect(()=>{
    console.log('worked')
    const verifyuser = async ()=>{
      if(!cookie.jwt){
        dispatch({
          type:'Auth',
          field:'user',
          payload:null
        })
          Navigate('/login')
      }
      else{
        const {data} = await instance.post('/',{},{
          withCredentials:true
        })
        if(!data.status){
          removeCookie("jwt")
          dispatch({
            type:'Auth',
            field:'user',
            payload:null
          })
          Navigate('/login')
        }
        else{
          console.log('else partr worked')
          dispatch({
            type:'Auth',
            field:'user',
            payload:data.user
          })
        }
       
      }
    }
    verifyuser()
  },[cookie.jwt,Navigate,removeCookie])
  
  return (
    
    <Layout>
      
     <Createpost />
        <Post />
    </Layout>
    
   
  )
}

export default Home
