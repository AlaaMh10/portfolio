import { Fragment, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { MdMail } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

import NavigationList from './NavigationList';
import logo from '../../../assets/logo.png';

function Navigation () {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Fragment>
      <nav className="relative z-20 w-screen bg-[#f4f4f4] ">
        <div className="fixed flex items-start justify-between w-screen py-1 pl-6 pr-4 mx-auto shadow-xl h-14 bg-[#000111] bg-opacity-40 border-b border-solid border-opacity-50 border-beige">
          <a
            href="/#" className="outline-orange-700"
          >
            <img src={logo} alt="My Logo" className="w-10 h-10 bg-[#ffffff] bg-opacity-60 " />
          </a>

          <ul className="hidden items-center space-x-12 font-semibold text-lg text-white md:flex">
            <NavigationList link="#" text="Home" />
            <NavigationList link="#about" text="About" />
            <NavigationList link="#skills" text="Skills" />
            <NavigationList link="#projects" text="Projects" />
            <a
              href="#contact"
              className="relative flex items-center space-x-1 px-5 py-2 text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-orange-500 after:to-orange-700 after:rounded-full after:-z-10 after:duration-500 hover:from-orange-500 hover:to-orange-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
            >
              <li>Contact</li>
              <MdMail color="white" />
            </a>
          </ul>

          <div onClick={openModal} className="pr-4 cursor-pointer md:hidden">
            <RxHamburgerMenu size={24} />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {showModal && (
        <div
          onClick={openModal}
          className="fixed top-0 left-0 z-10 h-screen w-full md:hidden"
        />
      )}
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showModal}
        timeout={400}
        classNames={{
          enterActive: 'animate-openNavModal',
          exitActive: 'animate-closeNavModal',
        }}
      >
        <div className="absolute top-[86px] right-4 z-20 w-11/12 mx-auto px-4 transition-all sm:right-6 md:hidden">
          <div className="flex flex-col items-center space-y-8 pt-12 pb-10 bg-white rounded-[35px] shadow-md">
            <ul className="flex flex-col space-y-8">
              <NavigationList
                link="#Header"
                text="Home"
                openModal={openModal}
              />
              <NavigationList
                link="#about"
                text="About"
                openModal={openModal}
              />
              
              <NavigationList
                link="#skills"
                text="Skills"
                openModal={openModal}
                />
                <NavigationList
                  link="#projects"
                  text="Projects"
                  openModal={openModal}
              />
            </ul>
            <a
              href="#contact"
              className="relative flex items-center space-x-1 px-5 py-2 text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-orange-500 after:to-orange-700 after:rounded-full after:-z-10 after:duration-500 hover:from-orange-500 hover:to-orange-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.4] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
            >
              <span>Contact</span>
              <MdMail color="white" />
            </a>
          </div>
        </div>
      </CSSTransition>
    </Fragment>
  );
};

export default Navigation;