import {React} from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// require('dotenv').config()






function Contact(props) {

  console.log(process.env.REACT_APP_BACKEND_URL);

  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");


    await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/send-mail`,{name, email, message})
    .then(res=>{
      if(res.data.code===200){

        toast.success("Your Message Sent",{
          position: "top-right"
        })

       
      }
      else{
        toast.error("Not sent due to technical Problem",{
          position: 'top-right'
        })
      }
      
    })
    .catch(error =>{
      toast.error(`${error.message}`,{
        position: 'top-right'
      })
    })
  }


  return (
    <div>
                      <h1 className='text-5xl font-normal p-2'>{props.title}</h1>
                <div>
                <form  onSubmit={handleSubmit} >
               
               <label for="website-admin" class="font-medium block mb-2 text-sm ">Name</label>
               <div class="flex mb-2">
                 <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-400 focus:outline-none  rounded-e-0  rounded-s-md ">
                   <svg class="w-4 h-4  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                   </svg>
                 </span>
                 <input autoFocus  type="text" id="name" onChange={(e)=>{setName(e.target.value)}} class=" text-white focus:outline-none bg-opacity-20 rounded-none rounded-e-lg bg-gray-400 border  block flex-1 min-w-0 w-full text-sm  p-2.5  " placeholder="your name"/>
               </div>
               <label for="input-group-1" class="block mb-2 text-sm font-medium  ">Email</label>
               <div class="relative mb-2">
                 <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                   <svg class="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                       <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                       <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                   </svg>
                 </div>
                 <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="email" class=" text-white focus:outline-none  bg-opacity-20 bg-gray-400 border   text-sm rounded-lg  block w-full ps-10 p-2.5  " placeholder="your-name@email.com"/>
                 
                 
               </div>
               <label for="input-group-1" class="block mb-2 text-sm font-medium  ">Message</label>
               <textarea id="message"  onChange={(e)=>{setMessage(e.target.value)}} rows="10" class=" text-white bg-opacity-20 block p-2.5 w-full text-sm  bg-gray-400 rounded-lg border focus:outline-none " placeholder="Write your your Message here..."></textarea>
               
               <div className=" relative mt-2">
               <button type="submit" class="bg-slate-700  px-5 py-3 text-base font-medium text-center text-gray-300 rounded-lg  outline-none ">Send</button>

               </div>

                </form>
                </div>

    <ToastContainer/>
    </div>
  )
}

export default Contact