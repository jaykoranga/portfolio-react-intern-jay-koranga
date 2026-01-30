const Hero = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row
                    items-center justify-between
                    md:h-screen
                    gap-6 md:gap-0
                    px-4 md:px-0 mt-40 md:mt-0 md:mb-10 mb-45">


      <div className="md:w-1/2 md:h-full
                      flex items-center justify-center">
        <img
          src="./profile.png"
          alt="Profile"
          className="object-contain
                     w-full h-100 md:h-full
                     max-w-md md:max-w-none"
        />
      </div>


      <div className="md:w-1/2
                      flex flex-col justify-center
                      gap-3 md:gap-6
                      text-center md:text-left">

        <p className="font-bold
                      text-4xl md:text-9xl
                      leading-tight">
          Jay Koranga
        </p>

        <p className="font-bold
                      text-2xl md:text-5xl
                      text-gray-700">
          React Intern
        </p>
      </div>
    </div>
  )
}

export default Hero
