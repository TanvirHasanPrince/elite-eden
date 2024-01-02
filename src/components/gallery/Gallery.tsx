import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-dancingScript",
});

const Gallery = () => {
  return (
    <div className="mx-auto container py-14 h-full text-center">
      <div className="mb-8">
        <h3
          className={`${dancingScript.className} text-5xl font-bold`}
        >
          Some of our favourite momemnts
        </h3>
      </div>
      <div className="flex flex-wrap">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-1.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-2.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-3.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-4.jpg"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-5.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-6.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-7.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-8.jpg"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-9.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-10.jpg"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-11.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/gallary-12.jpg"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
