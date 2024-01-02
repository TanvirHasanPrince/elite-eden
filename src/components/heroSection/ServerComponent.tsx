import Image from "next/image";

import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-dancingScript",
});

export const heading1 = (
  <>
    <h1 className={`${dancingScript.className} font-heading mb-6`}>
      Explore Our Elite Hotel
    </h1>
    <p className="text-[#4a4a4a] dark:text-[#fffffe] mb-12 max-w-lg">
      Welcome to our luxurious haven, where indulgence meets sophistication.
      Step into a world of unparalleled elegance as you explore our elite hotel,
      where every moment is crafted to perfection. Nestled in the heart of
      Switzerland, our meticulously designed accommodations blend opulence with
      modern comfort, promising a stay that transcends ordinary luxury.
    </p>
  </>
);

export const section2 = (
  <div className="flex-1 lg:block hidden">
    {/* Images */}
    <div className="lg:grid hidden gap-8 grid-cols-1 ">
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
