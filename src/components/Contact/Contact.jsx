import React from 'react'
import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <footer id="contact" className='Ccontainer'>
        <div className='Ctext'>
            <h2>
                Contact
            </h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className='Clinks'>
            <li className='Clink'>
              <MdEmail className='text-[50px]'/>
              <a href="mailto:spsrajjput@gmail.com">spsrajjput@gmail.com</a>
            </li>
            <li className='Clink'>
              <CiLinkedin className='text-[50px]'/>
              <a href="https://www.linkedin.com/in/shashi-pratap-singh-007228308/">linkedin.com</a>
            </li>
            <li className='Clink'>
              <FaGithub className='text-[50px]'/>
              <a href="https://github.com/SPSingh-1">github.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
