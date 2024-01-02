const NewsLetter = () => {
  return (
    <section className="container mx-auto px-4">
      <form className="bg-secondary text-white px-4 rounded-xl flex flex-col justify-center items-center py-6 md:py-24">
        <p className="md:font-semibold text-lg md:text-xl text-center mb-3">
          Explore More About Our Hotel
        </p>
        <h6 className="md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center">
          Sign Up for Our Newsletter
        </h6>

        <div className="flex-col justify-center w-full md:flex-row flex pt-12">
          <input
            type="email"
            placeholder="Your email"
            className="bg-[#026057] h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none"
          />
          <button
            type="button"
            className="px-6 md:px-[50px] lg:px-[72px] py-2 md:py-2 lg:py-2 bg-[#026057] rounded-lg md:rounded-xl lg:rounded-xl shadow-sm shadow-tertiary-light text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
