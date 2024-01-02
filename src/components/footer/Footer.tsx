import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";


const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-dancingScript",
});

const Footer = () => {
  return (
    <footer className="mt-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <Link href={"/"} className="font-bold text-lg text-tertiary-dark ">
            Elite Eden
          </Link>
        </div>

        <h4
          className={`${dancingScript.className} lg:text-left md:text-center text-center text-5xl font-bold `}
        >
          Contact
        </h4>
        <div className="flex lg:flex-wrap md:flex-col lg:flex-row flex-col gap-16 justify-between items-center">
          <div className="flex-1">
            <div>
              <p className="flex items-center pt-2">Dhaka Bangladesh</p>
            </div>

            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">Tanvir Hasan Prince</p>
            </div>
            <div className="flex items-center ">
              <BsTelephoneOutbound />
              <p className="ml-2">000-000-000</p>
            </div>
            <div className="flex items-center pt-4 ">
              <BiMessageDetail />
              <p className="ml-2">t.hasan.prince@gmail.com</p>
            </div>
          </div>
          <div className="flex-1 lg:text-right text-center">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in touch</p>
            <p className="pb-4">Our Privacy Commitment</p>
            <p className="pb-4">Terms of service</p>
            <p>Customer Assistance</p>
          </div>
          <div className="flex-1 lg:text-right text-center">
            <p className="pb-4">Dining Experiences</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-light h-10 lg:h-[70px]  md:h-[70px] mt-16 bottom-0 left-0"></div>
    </footer>
  );
};

export default Footer;
