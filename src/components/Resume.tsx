// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume() {
  const experiences = [
    {
      company: "Marokug",
      role: "Senior Full Stack Web Dev",
      date: "January 2024 - Present",
    }
  ];
  const tech_stack = [
    {
      icon: <i className="fab fa-react"></i>,
      name: "React",
    },
    {
      icon: <i className="fa fa-file-code"></i>,
      name: "Typescript",
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
      name: "Golang (Gin) {Basics}",
    },
    {
      icon: <i className="fab fa-js"></i>,
      name: "JavaScript (ES6+)",
    },
    {
      icon: <i className="fab fa-html5"></i>,
      name: "HTML",
    },
    {
      icon: <i className="fab fa-css3-alt"></i>,
      name: "CSS",
    },
    {
      icon: <i className="fab fa-bootstrap"></i>,
      name: "Bootstrap",
    },
    {
      icon: <i className="fas fa-database"></i>,
      name: "MySQL",
    },
    {
      icon: <i className="fab fa-js"></i>,
      name: "jQuery",
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
        <a target="_blank" href="https://okekedivine.vercel.app/Okeke_Divine_Resume.pdf">
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
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">About Me</h2>
              <p className="my-text-grey-1  mb-2">
                Hello my name is Okeke Divine, I'm a full stack web developer,
                interested in having my lines of code in a popular opensource
                repo. I love startups, Ai, robotics and basically everything
                tech. That said, I want to launch a startup that actually solves
                problems. Everything I do is
                a step to my goal
              </p>
            </div>
          </div>
          <div className="mb-3 pt-10 pb-10 pl-10 prx-10 projectCard group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200">
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
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200">
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
                          className="mb-1 my-bg-grey-1 w-fit rounded-xl pt-[0.05rem] pb-[0.05rem] pl-3 pr-3"
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
        </div>
      </div>
    </div>
  );
}
