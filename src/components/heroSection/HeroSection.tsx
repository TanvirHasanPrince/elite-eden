import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex px-4 items-center  gap-12 container mx-auto">
      <div className="py-10 h-full">
        <h1 className="font-heading mb-6">Explore Our Elite Hotel</h1>
        <p className="text-[#4a4a4a] dark:text-[#fffffe] mb-12 max-w-lg">
          Experience luxuary with style
        </p>
        <button className="btn-primary">Get Started</button>
        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Basic Room</p>
            <p className="md:font-bold lg:font-bold lg:text-3xl font-medium text-lg xl:text-5xl">
              +20
            </p>
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Luxury Room</p>
            <p className="md:font-bold lg:font-bold lg:text-3xl font-medium text-lg xl:text-5xl">
              +20
            </p>
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Suite</p>
            <p className="md:font-bold lg:font-bold lg:text-3xl font-medium text-lg xl:text-5xl">
              +20
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        {/* Images */}
        <div className="md:grid lg:grid hidden gap-8 grid-cols-1 ">
          <div className="grid grid-cols-2 gap-8 h-48">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={"/images/hero-1.jpg"}
                alt="hero-1"
                width={300}
                height={300}
                className="img scale-animation"
              ></Image>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={"/images/hero-2.jpg"}
                alt=""
                width={300}
                height={300}
                className="img scale-animation"
              ></Image>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 h-48">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={"/images/hero-3.jpg"}
                alt="hero-1"
                width={300}
                height={300}
                className="img scale-animation"
              ></Image>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={"/images/hero-4.jpg"}
                alt=""
                width={300}
                height={300}
                className="img scale-animation"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
