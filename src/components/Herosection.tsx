import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/heropicture.png"
        alt="A beautiful bird on a hand holding a small Earth"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
        className="z-0"
      />

      {/* Dunkles Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Inhalt  */}
      <div className="relative z-20 flex flex-col justify-center items-start text-white h-full p-8 md:p-16 lg:p-24">
        <div className="max-w-xl space-y-4">
          
          <p className="text-2xl md:text-3xl font-light">
            Where birdcare comes to life
          </p>
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
            Welcome to the colourful world of Jacobi Jayne
          </h1>
          {/* <div className="mt-8 space-y-3">
            <a href="#" className="block text-lg md:text-xl font-medium hover:text-gray-300 transition-colors duration-300">
              Register your new bird feeder
            </a>
            <a href="#" className="block text-lg md:text-xl font-medium hover:text-gray-300 transition-colors duration-300">
              Find a stockist or get help with your feeder
            </a>
            <a href="#" className="block text-lg md:text-xl font-medium hover:text-gray-300 transition-colors duration-300">
              Professional conservationists – browse the Schwegler catalogue
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;