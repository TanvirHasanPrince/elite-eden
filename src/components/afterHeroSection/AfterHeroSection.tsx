import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-dancingScript",
});

const AfterHeroSection = () => {
  return (
    <section className="flex px-4 items-center justify-center gap-12 container mx-auto mt-10 bg-gray-100 p-28 dark:bg-black">
      <div className="text-center">
        <h1
          className={`${dancingScript.className} text-2xl text-yellow-500 text-center font-bold mb-2`}
        >
          HERITAGE MEETS MODERN LUXURY{" "}
        </h1>
        <p>
          Nestled in the breathtaking embrace of the majestic mountains, Hotel
          Elite Eden stands as an architectural masterpiece, providing a
          CozyStay experience that seamlessly blends modern comfort with the
          enchanting allure of nature. This idyllic retreat in the heart of the
          mountains beckons guests with contemporary accommodations, inviting
          them to indulge in the ultimate fusion of luxury and outdoor
          adventure. Surrounded by unrivaled ski and hiking trails, Hotel Elite
          Eden becomes a gateway to the pristine beauty of the mountains,
          promising an unforgettable stay where every moment is a harmonious
          symphony of relaxation and exploration.
        </p>
      </div>
    </section>
  );
};

export default AfterHeroSection;
