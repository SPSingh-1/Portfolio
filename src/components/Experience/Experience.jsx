import React from "react";
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiReact } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { BiLogoMicrosoft } from "react-icons/bi";
import { SiNetflix } from "react-icons/si";
import { DiResponsive } from "react-icons/di";

const Experience = () => {
  return (
    <section className="Econtainer" id="experience">
      <h2 className="Etitle">Experience</h2>
      <div className="Econtent">
        <div className="Eskills">
          <div className="skill">
            <div className="skillImageCointainer">
              <SiHtml5 className="text-[75px] text-[#ff5252]" />
            </div>
            <p className="text-[20px] font-[700]">HTML</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <DiCss3 className="text-[75px] text-[blue]" />
            </div>
            <p className="text-[20px] font-[700] ">CSS</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <SiReact className="text-[75px] text-[blue]" />
            </div>
            <p className="text-[20px] font-[700] ">React</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <TbBrandJavascript className="text-[75px] text-[green]" />
            </div>
            <p className="text-[20px] font-[700]">JavaScript</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <SiMongodb className="text-[75px] text-[#034a03]" />
            </div>
            <p className="text-[20px] font-[700]">Mongo Db</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <RiTailwindCssFill className="text-[75px] text-[blue]" />
            </div>
            <p className="text-[20px] font-[700]">Tailwind CSS</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <FaBootstrap className="text-[75px] text-[#ac04ac]" />
            </div>
            <p className="text-[20px] font-[700]">Bootstrap</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <FaGithub className="text-[75px] text-[black]" />
            </div>
            <p className="text-[20px] font-[700] ">Git Hub</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <SiPostman className="text-[75px] text-[#ff5252]" />
            </div>
            <p className="text-[20px] font-[700] ">PostMan</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <SiExpress className="text-[75px] text-[#ff5252]" />
            </div>
            <p className="text-[20px] font-[700]">Express</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <FaNodeJs className="text-[75px] text-[green]" />
            </div>
            <p className="text-[20px] font-[700]">Node Js</p>
          </div>
          <div className="skill">
            <div className="skillImageCointainer">
              <SiVite className="text-[75px] text-[yellow]" />
            </div>
            <p className="text-[20px] font-[700]">VITE</p>
          </div>
        </div>

        <ul className="Ehistory">
          <li className="EhisItem">
            <DiResponsive className="text-[100px] " />
            <div className="EhisItemDetail">
                <h3>React Developer, Intrenship Studio</h3>
                <p>Jan 2025 - Feb 2025</p>
                <ul>
                <li>
                where I built responsive, reusable components and real-world projects. Gained hands-on experience in modern React practices, enhancing my skills in UI design, state management, and component architecture.
                </li>
                </ul>
          </div>
          </li>
          <li className="EhisItem">
            <BiLogoMicrosoft className="text-[50px] " />
            <div className="EhisItemDetail">
                <h3>React Developer, Itonic Labs</h3>
                <p>May 2024 - June 2024</p>
                <ul>
                <li>
                Worked on the Edzyu live project, developing dynamic, percentage-based control cards. Implemented logic to render a single reusable card component on-demand, displaying multiple card types efficiently. Gained practical experience in building modular, scalable UI components for real-time applications.
                </li>
                </ul>
            </div>
          </li>
          <li className="EhisItem">
            <SiNetflix className="text-[50px] " />
            <div className="EhisItemDetail">
                <h3>React Developer, Itonic Labs</h3>
                <p>Nov 2023 - Dec 2023</p>
                <ul>
                <li>
                Completed a React-focused internship where I deepened my understanding of React.js, including its core concepts, structure, and real-world applications. Gained valuable knowledge about React’s ecosystem, components, state management, and best practices used in professional development environments.
                </li>
                </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
