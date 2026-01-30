interface AboutProps {
  aboutData: Record<string, string | number>
}

const About = ({ aboutData }: AboutProps) => {
  return (
    <div className="md:scroll-mt-20 flex flex-col ">

      {/* Heading */}
      <div className="flex justify-center font-serif font-bold text-center
                      text-4xl md:text-7xl
                      md:pt-5 pt-2">
        About
      </div>

      <div className="flex flex-col items-center font-serif md:text-xl text-base">

        <div className="flex flex-col md:flex-row
                        justify-center items-stretch
                        mx-auto
                        md:mt-20 mt-10
                        gap-8 md:gap-6
                        max-w-6xl w-full px-4">

          {/* About text */}
          <div className="md:w-1/2 shadow-sm rounded-xl
                          p-6 md:p-10
                          leading-relaxed text-gray-800">
            I’m a frontend developer who enjoys building modern web interfaces
            using React and TypeScript. What excites me most is not just creating
            features, but understanding how frameworks work under the hood —
            from rendering and reconciliation to hooks and state management.

            <br /><br />

            I value clean code, thoughtful architecture, and responsive design.
            I’m constantly learning, experimenting, and refining my approach by
            building projects and exploring technical details that help me write
            better, more reliable code.

            <br /><br />

            I’m currently focused on growing as a developer by strengthening my
            fundamentals and applying them to real-world applications.
          </div>

          {/* About data */}
          <div className="shadow-sm rounded-xl
                          p-6 md:p-10
                          md:w-1/2">
            <ul className="flex flex-col gap-3">
              {Object.entries(aboutData).map(([key, value], index) => (
                <li
                  key={index}
                  className="flex justify-between gap-6
                             border-b last:border-b-0
                             pb-2 text-gray-700"
                >
                  <span className="font-medium">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
