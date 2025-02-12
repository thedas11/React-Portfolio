const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan"> Front-End Web Developer</h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">Soumalya Das</h1>

      <p className="text-lg mt-4 text-white">
        A Passionate Web Developer and Instructor
        <br /> with 1+ years of experience.
      </p>
    </div>
  );
};

export default HeroText;
