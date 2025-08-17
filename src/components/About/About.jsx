import React from 'react'
import { GiArrowCursor } from "react-icons/gi";
import { FaServer } from "react-icons/fa";
import { SiRobotframework } from "react-icons/si";



const About = () => {
  return (
    <section className='Acontainer' id="about">
        <h2 className='Atitle'>About</h2>
        <div className='Acontent'>
            <img src="/about.jpg" alt="Laptop With me"  className="w-30% h-auto max-h-[500px] object-cover rounded-full border-4 border-black  shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-600 aboutImage"/>
        <ul className='Aitems'>
            <li className='aboutItem'>
                <GiArrowCursor className='text-[80px] Aicons'/>
                <div className='aboutItemText'>
                    <h3 className='font-[700] text-[35px]'>Frontend Developer</h3>
                    <p className='text-[25px]'>
                        I'm a frontend developer with exprience in building responsive and optimized sites
                    </p>
                </div>
            </li>
            <li className='aboutItem'>
                <FaServer className='text-[60px] Aicons'/>
                <div className='aboutItemText'>
                    <h3 className='font-[700] text-[35px]'>Backend Developer</h3>
                    <p className='text-[25px]'>
                        I have experience developing fast and optimised back-end systems and API's
                    </p>
                </div>
            </li>
            <li className='aboutItem'>
                <SiRobotframework className='text-[80px] Aicons'/>
                <div className='aboutItemText'>
                    <h3 className='font-[700] text-[35px]'>FrameWork</h3>
                    <p className='text-[25px]'>
                        I have some exprience of diffrent frameworks like tailwind css bootstrap I am intrested to explore more known frameworks
                    </p>
                </div>
            </li>
        </ul>
    </div>
    </section>
  )
}

export default About
