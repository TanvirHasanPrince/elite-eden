import Image from "next/image";

export const heading1 = (
  <>
    <h1 className="font-heading mb-6">Explore Our Elite Hotel</h1>
    <p className="text-[#4a4a4a] dark:text-[#fffffe] mb-12 max-w-lg">
      Experience luxuary with style
    </p>
    <button className="btn-primary">Get Started</button>
  </>
);

export const section2 = (
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
);
