import React from "react";
 import './style.css';

 function SkillsBar () {
    return (
<section id="skills" className="flex justify-center bg-[#000000] bg-opacity-50 w-screen pt-24 border-b border-solid border-opacity-50 border-beige" >

  <div className="container2 bg-[#0e0e0e] mx-auto">
        <div className="px-2 mb-12 text-center lg:mb-16 bg-[#000000]">
        <h2 className='underline '>skills</h2>
        
      </div>
            <h1 className="title-text">My Ultimate Skills </h1>

        <div className="skill-box ">
                <span className="title">Bootstrap</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Tailwind CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Photoshop</span>
                <div className="skill-bar">
                    <span className="skill-per nodejs">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ExpressJS</span>
                <div className="skill-bar">
                    <span className="skill-per expressjs">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
                <div className="skill-box">
                <span className="title">NodeJS</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
              
            </div>
    </div>
        </section>
    )
 }

 export default SkillsBar;