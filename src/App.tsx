import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import "./index.css";
import Projects from "./components/Projects.tsx";
import Resume from "./components/Resume.tsx";

function App() {
  const [repos, setRepos] = useState([]);
  const [activeLink, setActiveLink] = useState("projects");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (location.pathname === "/resume") {
      setActiveLink("resume");
    } else {
      setActiveLink("projects");
    }
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const api = "https://api.github.com/users/okeke-divine/repos?sort=pushed";
  const socials = [
    {
      name: "Github",
      link: "https://github.com/Okeke-Divine/",
      icon: <i className="fab fa-github"></i>,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/okeke-divine-vessel/",
      icon: <i className="fab fa-linkedin"></i>,
    },
    {
      name: "Email",
      link: "mailto:okekedivine.skiy1@gmail.com",
      icon: <i className="fab fa-at"></i>,
    },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(api);
        setRepos(response.data);
      } catch (error) {
      } finally {
      }
    };

    fetchRepos();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div className="flex flex-wrap w-full p-6 md:p-[100px] md:flex md:flex-wrap md:justify-between">
          <div className="w-full md:w-1/2 md:block  pb-10 md:pb-0">
            <div className="md:w-4/5">
              <div className="flex justify-between items-center">
                <div className="text-white font-bold text-6xl">
                  Okeke Divine
                </div>
                <div className="md:hidden block text-gray-400 text-2xl">
                  <div className="cursor-pointer" onClick={toggleSidebar}>
                    <i className="fa-solid fa-bars-staggered"></i>
                  </div>
                </div>
              </div>
              <div className="text-white font-semibold text-2xl pt-5">
                Full Stack Web Developer
              </div>
              <div className="pt-10 text-gray-400 line-height-2 text-[1rem]">
                Hello, I'm <span className="text-white">Divine</span>, a full
                stack web developer. I love{" "}
                <span className="text-white">problem solving</span> and critical
                thinking, I live for the challenge, I use coding as a tool to{" "}
                <span className="text-white">solve problems</span>. I am
                currently interested in{" "}
                <span className="text-white">building interactive</span> UI's
                for game development.
              </div>
              <div className="pt-10 hidden md:block">
                <Link to="/" onClick={() => handleSetActiveLink("projects")}>
                  <div
                    className={`${
                      activeLink === "projects" ? "nav-link-active" : ""
                    } flex group items-center text-gray-400 hover:text-white gap-3 w-fit justify-items-center cursor-pointer text-xs tracking-[.2em]`}
                  >
                    <div>00</div>
                    <div>
                      <div className="bg-white w-6 h-[1px] group-hover:w-16 duration-300"></div>
                    </div>
                    <div className="uppercase">Projects</div>
                  </div>
                </Link>
                <Link
                  to="/resume"
                  onClick={() => handleSetActiveLink("resume")}
                >
                  <div
                    className={`${
                      activeLink === "resume" ? "nav-link-active" : ""
                    } flex group pt-10 items-center text-gray-400 hover:text-white gap-3 w-fit justify-items-center cursor-pointer text-xs tracking-[.2em]`}
                  >
                    <div>01</div>
                    <div>
                      <div className="bg-white w-6 h-[1px] group-hover:w-16 duration-300"></div>
                    </div>
                    <div className="uppercase">Resume</div>
                  </div>
                </Link>
              </div>
              <div className="pt-3 md:pt-[6.8rem]">
                <div className="flex flex-wrap gap-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      target="_blank"
                      href={social.link}
                      className="cursor-pointer"
                    >
                      <div className="text-white flex gap-2 items-center">
                        <span>{social.icon}</span>
                        {social.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="md:w-[90%]">
              {/* <Resume /> */}
              {/* <Projects repos={repose}/> */}
              <Routes>
                <Route path="/" element={<Projects repos={repos} />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}  p-10`}>
          <div className="flex flex-wrap justify-between mb-10 items-center">
            <div className="font-bold text-2xl">Okeke Divine</div>
            <div className="cursor-pointer" onClick={toggleSidebar}>
              <i className="fa-solid fa-times text-xl text-gray-400"></i>
            </div>
          </div>

          <div>
            <Link to="/" onClick={() => handleSetActiveLink("projects")}>
              <div className="flex gap-2 text-[1.1rem] mb-5">
                <div>00</div>
                <div className="uppercase">Project</div>
              </div>
            </Link>
            <Link to="/resume" onClick={() => handleSetActiveLink("resume")}>
              <div className="flex gap-2 text-[1.1rem]">
                <div>01</div>
                <div className="uppercase">Resume</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
