function About() {
  return (
  
    <section id="about" className="pt-32 bg-[#000000] bg-opacity-50 w-screen border-b border-solid border-opacity-50 border-beige">
      <div className="px-2 mb-12 text-center lg:mb-16 bg-black-950">
        <h2 className='underline '>About Me</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-white sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find more information about me, what I do, and my
          current skills in terms of programming and technology.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-row space-y-12 sm:px-10 lg:flex-row lg:space-y-0 lg:space-x-16">
        <div className="w-full">
          <h3 className="mb-6 text-white">Get to know me!</h3>
          <h5 className="r l-96 b-25 mb-6 text-white w-1/3 flex flex-row">I'm a multi-disciplined designer based out of Orange County, CA by way of Cleveland Ohio. My experience ranges from UI/UX Design, Product Design, Marketing Design, and Front-End Development.

As a Designer I believe in setting ego aside and creating an experience that caters to the user's needs. I have a passion for an organized workflow, designing visual languages, and solving complex problems.

You can find me in the water dodging surfers in the crowded pacific ocean trying to catch a couple of waves.</h5>
        
  
        </div>
        <div className='cube'>
        <div className='top'></div>
        <div>
          <span style={{"--i":"0"}}></span>
          <span style={{"--i":"1"}}></span>
          <span style={{"--i":"2"}}></span>
          <span style={{"--i":"3"}}></span>
    </div>
  </div>
    
  </div>
    </section>
  );
};

export default About;
