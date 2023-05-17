import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id="footer" className=" mx-auto w-screen pt-12 pb-8 px-4 text-gray-500 lg:pt-16 md:px-40 lg-pt-22">
      <div className="flex flex-col-reverse items-start justify-between space-y-reverse space-y-10 mb-5 sm:flex-row sm:space-y-0">
        <div>
          <h4 className="mb-4 text-2xl font-bold uppercase">Alaa Mahmoudi</h4>
          <p className="max-w-1/6">
            A UX Designer focused on Designing 
            websites that leads to the success of the overall product
          </p>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <h4 className="mb-4 text-2xl font-bold uppercase">Social</h4>
          <div className="flex space-x-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com"
              className="inline-block transition-all hover:scale-110"
            >
              <BsLinkedin size={24} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com"
              className="inline-block transition-all hover:scale-110"
            >
              <BsTwitter size={24} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com"
              className="inline-block transition-all hover:scale-110"
            >
              <BsGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr />

      
    </footer>
  );
};

export default Footer;
