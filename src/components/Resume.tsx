// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume({ experiences, socialMedia }) {
  const tech_stack = [
    {
      icon: <i className="fab fa-react"></i>,
      name: "React",
    },
    {
      icon: <i className="fa fa-file-code"></i>,
      name: "Next.js",
    },
    {
      icon: <i className="fa fa-file-code"></i>,
      name: "Typescript",
    },
    {
      icon: <i className="fa fa-code"></i>,
      name: "Tailwind CSS",
    },
    {
      icon: <i className="fab fa-bootstrap"></i>,
      name: "Bootstrap",
    },
    {
      icon: <i className="fab fa-js"></i>,
      name: "jQuery (Basics)",
    },
    {
      icon: <i className="fab fa-php"></i>,
      name: "PHP",
    },
    {
      icon: <i className="fab fa-python"></i>,
      name: "Python (Django)",
    },
    {
      icon: <i className="fab fa-golang"></i>,
      name: "Golang (Gin) (Basics)",
    },
    {
      icon: <i className="fas fa-database"></i>,
      name: "MySQL",
    },
    {
      icon: <i className="fab fa-git"></i>,
      name: "Git",
    },
    {
      icon: <i className="fab fa-github"></i>,
      name: "Github",
    },
    {
      icon: <i className="fab fa-docker"></i>,
      name: "Docker (Basics)",
    },
    {
      icon: <i className="fas fa-robot"></i>,
      name: "Puppeteer",
    },
    {
      icon: <i className="fas fa-clock"></i>,
      name: "Node-Cron",
    },
  ];
  const education = [
    {
      inst: "Nnamdi Azikiwe University",
      course: "Computer Science",
      level: "B. Sc",
      year: "2022 - Present",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between text-white">
        <div className="flex gap-x-2 items-center">
          <div>
            <i className="fa-solid fa-file-lines"></i>
          </div>
          <div className="font-bold text-xl">My Resume</div>
        </div>
        <a
          target="_blank"
          href="https://okekedivine.vercel.app/Okeke_Divine_Resume.pdf"
        >
          <div className="text-gray-300 hover:text-white flex gap-x-2 items-center cursor-pointer">
            <div className="pr-1">View</div>
            <div>
              <i className="fa-solid fa-file-lines"></i>
            </div>
          </div>
        </a>
      </div>
      <div>
        <div className="mt-5">
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">About Me</h2>
              <div className="sectionContentList text-gray-400">
                Hello there, I'm Divine. My fascination with web development
                sparked 7 years ago, and it's been a thrilling journey ever
                since. Embarking on my coding journey through the customization
                of tailored templates on CodePen, I unearthed a natural affinity
                for delving into the intricate details of HTML & CSS.
              </div>

              <div className="sectionContentList text-gray-400 mt-2">
                My professional tenure has primarily been at Marokug, where I
                honed my skills and contributed extensively to various projects.
                During my time there, I delved into diverse projects, pushing
                boundaries and mastering new technologies.
              </div>

              <div className="sectionContentList text-gray-400 mt-2">
                My{" "}
                <a
                  href={socialMedia.mySocials.github}
                  target="_blank"
                  className="text-primary"
                >
                  Github
                </a>{" "}
                profile showcases a range of projects, each highlighting my
                dedication to crafting robust and innovative solutions. From web
                applications to repositories, I take pride in every line of code
                I've written.
              </div>
            </div>
          </div>
          <div className="mb-3 pt-10 pb-10 pl-10 prx-10 projectCard group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">Tech Stack</h2>
              <div>
                <div className="flex flex-wrap gap-x-5 gap-y-3 pr-2 my-text-grey-1">
                  {/* tech stack */}
                  {tech_stack.map((tech, index) => (
                    <div key={index} className="flex gap-x-3 gap-y-1 text-md">
                      <div>{tech.icon}</div>
                      <div>{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* past experience */}
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-10">
                Past Experience
              </h2>
              <div>
                {/* experiences */}
                {experiences.map((experience, index) => (
                  <div className="my-text-grey-1 mb-6" key={index}>
                    <div className="font-bold text-white mb-2">
                      {experience.company}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {experience.role.split(",").map((role, index) => (
                        <div
                          key={index}
                          className="mb-1 my-bg-blue-1 w-fit rounded-xl pt-[0.05rem] pb-[0.05rem] pl-3 pr-3"
                        >
                          {role.trim()}
                        </div>
                      ))}
                    </div>
                    <div>{experience.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* education */}
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">Education</h2>
              <div>
                {/* education loop */}
                {education.map((education,index) => (
                  <div key={index} className="text-white">
                    <div className="font-bold mb-2">{education.inst}</div>
                    <div className="mb-2 text-gray-400">{education.level} {education.course}</div>
                    <div className="text-gray-400">{education.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
