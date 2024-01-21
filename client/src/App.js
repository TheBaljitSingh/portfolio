import './App.css';
import { useState, useEffect } from 'react';
import { FaStackOverflow, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";

import Baljit from "../src/Baljit_maskup.jpg";
import Project from './Projects';
import Contact from './Contact';
import Acheivment from './Acheivment';



function App(){

  
  const [showDiv, setDiv] = useState({
    id: "Welcome!"
  });
  
  useEffect(()=>{
    console.log(showDiv);
  }, [showDiv]);

  const toggleDiv = (e)=>{

    setDiv({
      id: e.target.id,
    });
  };
  

  return (
    <div >
      <div className='w-screen fixed max-h-screen  bg-yewala'>
      {/* here navbar will go */}
      <nav className='bg-yewala text-gray-400 flex fixed w-screen p-8 h-auto'>
            <div className='flex-1 flex justify-center mr-auto'>
            <h2 className='font-semibold text-2xl hover:cursor-pointer '>Baljit Singh</h2>
            </div>   
            <div className='mx-72'>
            </div> 
            <div className='flex-1 flex justify-center ml-auto space-x-5 '>

              <div > <a href="https://stackoverflow.com/users/11642996/baljit-singh">< FaStackOverflow size={30} /></a>
              </div>
              <div>   <a href="https://github.com/TheBaljitSingh"><FaGithub size={30} /></a>
              </div>
              <div>  <a href="https://www.linkedin.com/in/thebaljitsingh/"><FaLinkedin size={30} /></a>
              </div>
                       

            </div>      
      </nav>
         
        <main className=' w-full h-screen my-24 text-gray-400 '>

          <p className='absolute bottom-0 right-0 transform rotate-90 mb-44 text-xl font-normal'> <span className='text-yellow-300'>@ </span>|  <span className='select-all'> thebaljitsinghIN@gmail.com</span></p>

          <div className='max-w-[1158px]  h-screen flex m-auto justify-between '>
            <div className=' w-2/3 flex-row my-8'> {/* margin change kar ke dekh le */}
              {/* this is for content */}
              <div className='my-15'>
                <div className={showDiv.id==="Welcome!"? "Welcome!": "hidden"}>
                <h1 className='text-5xl font-normal p-2 '>Welcome!</h1>
                <p className='border border-blue-600 rounded-lg shadow-gray-400 p-4 text-xl '>Hey, I'm 
                <span className='inline-flex items-baseline'>
                  <a href="https://twitter.com/TheBaljitSingh"> 
                    <img src={Baljit} alt="Baljit Singh from Parul University" className='self-center w-5 h-5 rounded-full mx-1 ' /> 
                    </a> 
                    <span>Baljit</span> 
                </span>
                . A pre-final year student deeply passionate about software engineering. From coding challenges to collaborative projects, I thrive on turning innovative ideas into reality. Passionate about turning ideas into impactful solutions. Join me in discovering the exciting world of software engineering!
                </p>
                </div>
                <div className={showDiv.id==="Project"? "Project": "hidden" } >
                <Project title="Project" />
                
                </div>
                <div className={showDiv.id==="Acheivment"? "Acheivment": "hidden"} >
                <Acheivment title="Acheivment"/>
               
                </div>
                <div className={showDiv.id==="Contact"? "Contact": "hidden"} >
                  <Contact title="Contact me"/>

               
                </div>
                

              </div>

              

            </div>
            
         
            <div className=' w-1/3 h-screen flex'>
              {/* this is for sidebar */}
              <div className='flex flex-col items-center justify-center w-full mb-32 '>
              
              <div>
                <button id='Welcome!' onClick={(e)=>{toggleDiv(e)}}  className='w-32 p-4 text-lg focus:text-gray-300  rounded-lg ease-in-out duration-100 ' >Welcome</button>
              </div>
              <div>
                <button id='Project' onClick={(e)=> toggleDiv(e)} className='w-32 p-4 text-lg focus:text-gray-300   rounded-lg ease-in-out duration-100'  >Projects</button>
              </div>
              <div>
                <button id='Acheivment' onClick={(e)=>{toggleDiv(e)}} className='w-32 p-4 text-lg focus:text-gray-300     rounded-lg ease-in-out duration-100'  >Acheivments</button>
              </div>
              <div>
                <button id='Contact' onClick={(e)=>{toggleDiv(e)}} className=' w-32 p-4 text-lg focus:text-gray-300   rounded-lg ease-in-out duration-100' >Contact</button>
              </div>
                
            </div>
            </div>
          </div>
          


        </main>

      </div>
        
        
    </div>
  )
}

export default App;
