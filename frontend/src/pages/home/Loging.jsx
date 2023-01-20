import React, { useReducer, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import instance from '../../Axios'
import Cards from '../../components/Topbar/Cards'
const initialformstate = {
  email:'',
  password:'',
}
const formreducer = (state,action)=>{
  switch(action.type){
    case 'handleinput':
    return{
      ...state,
      [action.field] : action.payload
    };
    default:
      return state
  }
}

function Loging() {
  const Navigate = useNavigate()
  const generateerror = (err)=>{
    toast.error(err,{
      position:"top-center"
    })
  }
  const [mailvalid,setmailvalid] = useState(true)
  const [passshort,setpassshort] = useState(true)
  const [formstate,dispatch] = useReducer(formreducer,initialformstate)
 const submit = async (e)=>{
  //e.preventDefault()
 let emailValid = formstate.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
 setmailvalid(emailValid)
 let passvalid = formstate.password.length >=4
 setpassshort(passvalid)
 if(emailValid&&passvalid){

  const {data} = await instance.post('/login',formstate,{withCredentials:true})
 console.log(data)
 if(data){
  if(data.errors){
    const{name,email,password} = data.errors
    if(email){
      generateerror(email)
    }
    else if(password){
      generateerror(password)
    }
    else if(name){
      generateerror(name)
    }
   else{

   }
  }
  else{
    Navigate('/')
  }
 }
 
}
 }
 const handlechange = (e)=>{
  dispatch({
    type:'handleinput',
    field:e.target.name,
    payload:e.target.value
  })
 }

  
  return (
    <div className='h-screen flex items-center'>
        <div className='max-w-md mx-auto grow '>
        <h1 className='text-6xl mb-4  text-gray-400  text-center justify-center m-4'>Login</h1>
            <Cards>
                <div>
                <input  className="block w-full p-2.5  mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder='Enter the email' value={formstate.email} name = 'email' onChange={(e)=>handlechange(e)}   type='text'></input>
                {
                 !mailvalid   ?  <label className='text-red-700'>Invalid email</label> : ''
                }
                </div>
                <div>
                <input className="block w-full p-2.5 mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder='Enter the password' value={formstate.password} name = 'password' onChange={(e)=>handlechange(e)}   type='password'></input>
                {
                 !passshort   ?  <label className='text-red-700'>Invalid password</label> : ''
                }
                </div>
                <div>
                <button className='bg-socialblue text-white px-6 py-1 rounded-md m-3' onClick={submit}>Login</button>
                </div>
                <Link className='flex gap-4 items-center justify-center m-4 p-4 border-b-gray-100 hover:bg-socialblue hover:text-white hover:scale-110 transition-all'>
                <svg className='h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>Login with Google
                </Link>
                <div className='grow text-right'>
                        <Link to={'/signup'} className = 'font-semibold underline'>Create an account</Link>
                    </div>
                
            </Cards>
            <ToastContainer/>
        </div>
      
    </div>
  )
}

export default Loging
