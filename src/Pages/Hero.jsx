// import bg from '../../src/images/banner.png';

const Hero = () => {
    return (
        <div className="relative h-[688px] bg-[url('../../src/images/banner.png')] bg-cover bg-center flex items-center">
          <div className='absolute bg-gradient-to-r from-[#06422c]/55 via-[#013522cd]/35 to-[#035a3ab8]/35 inset-0'></div>
          <div className="z-10 w-full lg:w-10/12 xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="text-white max-w-2xl">
            <button className="border px-4 sm:px-6 py-2 sm:py-2.5 bg-white/5 rounded-full text-white shadow-none backdrop-blur-xs text-xs sm:text-xs">Professional Drone Services Across India</button>
            <h1 className="leading-relaxed text-left text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-0">Elevate Your Business with Advanced <span className="text-btn-primary">Drone Solutions</span></h1>
            <p className="text-white text-base sm:text-lg md:text-xl py-3">From precision agriculture to infrastructure inspection, we deliver cutting-edge aerial solutions for enterprises, government, and specialized industries.</p>
            <button className="px-4 sm:px-6 py-2.5 sm:py-3 mt-4 bg-btn-primary hover:bg-green-700 text-white font-semibold shadow-md transition duration-300 text-sm sm:text-base">
                Book a Service
            </button>
            </div>
          </div>
          <div></div>
        </div>
    );
};

export default Hero;