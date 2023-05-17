import { Fragment } from 'react';

import Navigation from './Navigation/Navigation';
import Button from '../UI/Button';


function Header (){

  return (
    <Fragment>
    <Navigation />      


    <header id="header" className="relative px-4 pb-16 rounded-md	 h-screen w-screen pt-20 border-b border-solid border-opacity-50 border-beige" >  
     
        <div className="container mx-auto animate-heroMoveInBottom md:py-10 lg:px-10 xl:px-24 w-screen" >
          <div className="flex flex-col-reverse items-start space-y-reverse space-y-10 md:flex-row md:space-x-4 md:space-y-0 lg:ml-8 xl:space-x-14 xl:ml-20">
            <div className="rap1 w-11/12  ">
              <h1 className="rap1 mb-3 text-7xl text-white font-bold uppercase transition-all animate-moveInLeft sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                Hi, I'm Alaa Mahmoudi
              </h1>
              <p className="rap1 mb-8 max-w-xl flex text-xl text-center mx-auto text-white transition-all animate-moveInRight sm:text-7xl md:text-7xl lg:text-6xl lg:mb-10">
                A UX Designer 
              </p>
              <span className="animate-btnMoveInBottom " style={{"margin": "80px"}}>
                <Button link="#" text="Download cv" style={{"margin-top": "80px"}} />
              </span>
            </div>

            <div className="bord w-3/4 border-dotted border-4 border-orange-200 rounded-full shadow-[inset_0_0_50px_50px_#fdf2e9] animate-imgMoveInRight sm:w-3/5 sm:ml-6 md:w-1/2" style={{"margin-top": "10px"}}>
              <div className="bg-orange-200 rounded-"style={{"border-radius": "50%"}}>
                <img src="My project-1.png" alt="Mfon" className="w-full rounded-full " />
              </div>
            </div>
          </div>
        </div>
      </header>

      
    </Fragment>
  );
};

export default Header;
