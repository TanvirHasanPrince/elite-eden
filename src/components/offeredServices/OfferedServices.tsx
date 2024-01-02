import {
  FaCar,
  FaWifi,
  FaBirthdayCake,
  FaHandSparkles,
  FaMagic,
  FaSwimmingPool,
} from "react-icons/fa";

import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-dancingScript",
});

const OfferedServices = () => {
  return (
    <section className="flex px-4 justify-between gap-12 container mx-auto mt-10 bg-gray-100 p-28 dark:bg-black">
      <div className="p-10">
        <div className="mb-4">
          <h1
            className={`${dancingScript.className} text-yellow-500 text-left font-bold`}
          >
            Discover the services we offer
          </h1>
          <p className="text-lg md:text-2xl lg:text-2xl font-bold">
            THE ESSENTIALS
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* First phase */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 my-1 md:my-0">
              <div>
                <FaCar className="text-yellow-500" />
              </div>

              <div className="text-left">
                <p className="text-yellow-500 font-bold">
                  Air port pickup service
                </p>
                <p>
                  Hotel Elite Eden goes the extra mile to ensure your seamless
                  arrival experience with our complimentary Airport Pick-up
                  Service.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 my-1 md:my-0">
              <div>
                <FaWifi className="text-yellow-500" />
              </div>

              <div className="text-left">
                <p className="text-yellow-500 font-bold">Wifi & Internet</p>
                <p>
                  Stay connected effortlessly during your stay at Hotel Elite
                  Eden with our high-speed WiFi and Internet services. Whether
                  for business or leisure, enjoy seamless connectivity to keep
                  you in touch with the world from the comfort of your stylish
                  accommodations.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 my-1 md:my-0">
              <div>
                <FaBirthdayCake className="text-yellow-500" />
              </div>

              <div className="text-left">
                <p className="text-yellow-500 font-bold">Breakfast in Bed</p>
                <p>
                  Indulge in the ultimate morning luxury with our Breakfast in
                  Bed service at Hotel Elite Eden. Delight in a delectable
                  spread delivered to your room, allowing you to savor a
                  sumptuous start to your day without leaving the comfort of
                  your cozy retreat.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd phase */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 my-1 md:my-0">
              <div>
                <FaHandSparkles className="text-yellow-500" />
              </div>

              <div className="text-left">
                <p className="text-yellow-500 font-bold">
                  Housekeeper Services
                </p>
                <p>
                  Experience impeccable cleanliness and comfort with our
                  dedicated Housekeeper Services at Hotel Elite Eden. Our
                  meticulous team ensures your accommodations are a haven of
                  pristine perfection.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 my-1 md:my-0">
              <div>
                <FaMagic className="text-yellow-500" />
              </div>

              <div className="text-left">
                <p className="text-yellow-500 font-bold">Laundry Services</p>
                <p>
                  Refresh your wardrobe effortlessly with Hotel Elite Eden
                  convenient Laundry Services. Our professional team ensures
                  your garments are treated with care, offering a hassle-free
                  solution.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 my-1 md:my-0">
              <div>
                <FaSwimmingPool className="text-yellow-500" />
              </div>

              <div className="text-left">
                <p className="text-yellow-500 font-bold">Swimming Pool</p>
                <p>
                  Dive into relaxation at Hotel Elite Eden, where our inviting
                  swimming pool offers a refreshing oasis amid the mountains.
                  Immerse yourself in tranquility or enjoy a leisurely swim,
                  surrounded by stunning views for a truly rejuvenating
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:block">
        {" "}
        <p>images</p>{" "}
      </div>
    </section>
  );
};

export default OfferedServices;
