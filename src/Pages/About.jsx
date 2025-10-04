import banner from "../images/aboutBanner.jpg";

const About = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="relative h-[428px] bg-cover bg-center flex items-center justify-center"
    >
      <div className="absolute bg-gradient-to-b from-gray-500 via-gray-600/15 to-[#035a3ab8]/35 inset-0"></div>
      <div className="z-30 lg:w-10/12 xl:max-w-7xl mx-auto">
        <div className="text-white  px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
          <h1 className="lg:text-[52px] text-3xl sm:text-4xl md:text-5xl text-btn-primary font-semibold lg:text-center">
            About Hindustan Drone Services
          </h1>
          <p className=" lg:text-center text-gray-900 font-medium">
            India's premier drone service provider, delivering excellence in
            aerial solutions since 2018. Trusted by government agencies, Fortune
            500 companies, and enterprises across the nation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
