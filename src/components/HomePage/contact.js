import { Fragment } from "react";


function Contact(){


  return (
<Fragment>

            <section id="contact">
<div className="px-2 text-center lg:mb-10 pt-18 " >
        <h2 className='underline '>Contact</h2>
        
      </div>
      <div id="contact_container" className=" px-28 border-b border-solid border-opacity-50 border-beige  " >
                <form className=" flex justify-center items-center flex-col">
                        <input type="text" placeholder="name" required="" className="w-1/3 h-10 mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <input type="email" placeholder="email" required="" className="w-1/3 h-10 mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <textarea placeholder="your message" required="" rows="5" className="w-1/3 h-40 mb-6 bg-gray-50 border border-gray-300 text-gray-900 mx-auto text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                        <button link="http://alaamahmoudi2002@gmail.com" className=" m-8 w-32 h-10 bg-orange-500 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full">send</button>
                 
                    </form> 
        </div>
            </section>
          </Fragment>
  );



}

export default Contact