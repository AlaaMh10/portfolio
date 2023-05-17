import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./style2.css" ;




function project() {
  return (
    <section id="projects" className="w-screen pt-32 border-b border-solid border-opacity-50 border-beige  bg-[#000000] bg-opacity-50 ">

      <div className="slide-container">
        <div className="px-2 mb-12 text-center lg:mb-16 bg-black-950">
          <h2 className='underline '>Projects</h2>

        </div>
        <div className='mx-auto mb-6' style={{ "width": "700px" }}>


          <Fade>
            <div className="card __1 l-15 mx-auto" style={{ "margin": "auto" }}>
              <div className='overlay'>
                <h3>LiveScore</h3><br />
                <a className="btn" href="https://www.livescore.com/en/">LiveScore.com</a></div>
            </div>


            <div className="card __2 l-15 mx-auto" style={{ "margin": "auto" }}>
              <div className='overlay'>
                <h3>MyTek</h3><br />
                <a className="btn" href="https://www.mytek.tn">Mytek.com</a></div>
            </div>
            <div className="card __3 l-15 mx-auto" style={{ "margin": "auto" }}>
              <div className='overlay'>
                <h3>Uber</h3><br />
                <a className="btn" href="https://www.uber.com/fr/fr/">Uber.com</a></div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default project;