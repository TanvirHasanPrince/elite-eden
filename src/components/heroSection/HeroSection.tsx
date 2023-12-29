const HeroSection = () => {
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        {/* Heading */}
        <h1 className="font-heading mb-6">
         Explore Our Elite Hotel
        </h1>
        <p className="text-[#4a4a4a] dark:text-[#fffffe] mb-12 max-w-lg">
         Experience luxuary with style
        </p>
        <button className="btn-primary">Get Started</button>
        {/* Room Description */}
      </div>
      <div>{/* Images */}</div>
    </section>
  );
};

export default HeroSection;
