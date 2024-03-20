import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import experiences from "./data/experiences.json";
import socialMedia from "./data/socialMedia.json";

import "./index.css";
import TimeMachineGif from "./assets/rotate.gif";
import Projects from "./components/Projects.tsx";
import Resume from "./components/Resume.tsx";
import Experience from "./components/experience.tsx";

function App() {
  const [repos, setRepos] = useState([]);
  const [activeLink, setActiveLink] = useState("projects");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [firstTimeLoading, setFirstTimeLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComponent, setLoadingComponent] = useState("Loading...");
  const [totalRepos, setTotalRepos] = useState("-");

  useEffect(
    function () {
      if (isLoading == false) {
        setFirstTimeLoading(false);
        setLoadingComponent("");
        setTotalRepos(repos.length);
      }
    },
    [isLoading]
  );

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

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setIsSidebarOpen(false);
  };

  const api = "https://api.github.com/users/okeke-divine/repos?sort=pushed";
  const socials = [
    {
      name: "Github",
      link: "https://github.com/Okeke-Divine/",
      icon: <i className="fab fa-github"></i>,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/okekedivine__",
      icon: <i className="fab fa-twitter"></i>,
    },
    {
      name: "Email",
      link: "mailto:okekedivine.skiy1@gmail.com",
      icon: <i className="fab fa-at"></i>,
    },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(api);
        setRepos(response.data);
      } catch (error) {
      } finally {
        setIsLoading(false);
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
                <div className="text-white font-bold text-6xl my-ubuntu-font">
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
                stack web developer with 7+ years of hands-on experience
                designing, developing, and implementing applications and
                solutions using a range of technologies and programming
                languages.. I love{" "}
                <span className="text-white">problem solving</span> and critical
                thinking, I live for the challenge, I use coding as a tool to{" "}
                <span className="text-white">solve problems</span>.
              </div>
              <br />
              <br />
              <div className="">
                <Link to="/" onClick={() => handleSetActiveLink("projects")}>
                  <div
                    className={`${
                      activeLink === "projects" ? "nav-link-active" : ""
                    } flex group items-center text-gray-400 hover:text-white gap-3 w-fit justify-items-center cursor-pointer text-xs tracking-[.2em] mb-5`}
                  >
                    <div>00</div>
                    <div>
                      <div className="bg-white w-6 h-[1px] group-hover:w-16 duration-300"></div>
                    </div>
                    <div className="uppercase">Projects</div>
                  </div>
                </Link>
                <Link
                  to="/experience"
                  onClick={() => handleSetActiveLink("experience")}
                >
                  <div
                    className={`${
                      activeLink === "experience" ? "nav-link-active" : ""
                    } flex group items-center text-gray-400 hover:text-white gap-3 w-fit justify-items-center cursor-pointer text-xs tracking-[.2em] mb-5`}
                  >
                    <div>01</div>
                    <div>
                      <div className="bg-white w-6 h-[1px] group-hover:w-16 duration-300"></div>
                    </div>
                    <div className="uppercase">Experience</div>
                  </div>
                </Link>
                <Link
                  to="/resume"
                  onClick={() => handleSetActiveLink("resume")}
                >
                  <div
                    className={`${
                      activeLink === "resume" ? "nav-link-active" : ""
                    } flex group items-center text-gray-400 hover:text-white gap-3 w-fit justify-items-center cursor-pointer text-xs tracking-[.2em]`}
                  >
                    <div>02</div>
                    <div>
                      <div className="bg-white w-6 h-[1px] group-hover:w-16 duration-300"></div>
                    </div>
                    <div className="uppercase">Resume</div>
                  </div>
                </Link>
              </div>
              <div className="pt-10 md:pt-[6.8rem]">
                <div className="flex flex-wrap gap-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      target="_blank"
                      href={social.link}
                      className="cursor-pointer"
                    >
                      <div className="text-white flex gap-2 text-xl items-center">
                        <span>{social.icon}</span>
                        {/* {social.name} */}
                      </div>
                    </a>
                  ))}
                </div>
                <div>
                  <div className="mt-2">
                    <a
                      className=" text-white cursor-pointer border-b-2 border-dotted flex items-center w-fit"
                      target="_blank"
                      href="https://okekedivine.vercel.app/"
                    >
                      Portfolio 1.0
                      <i className="fa fa-external-link pl-2 text-[0.6rem]"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Projects
                      repos={repos}
                      totalRepos={totalRepos}
                      loadingComponent={loadingComponent}
                    />
                  }
                />
                <Route
                  path="/resume"
                  element={
                    <Resume
                      experiences={experiences}
                      socialMedia={socialMedia}
                    />
                  }
                />
                <Route
                  path="/experience"
                  element={<Experience experiences={experiences} />}
                />
              </Routes>
            </div>
          </div>
        </div>
        <div
          className={`sidebar ${
            isSidebarOpen ? "open" : ""
          } fixed p-10 shadow-2xl`}
        >
          <div className="flex flex-wrap justify-between mb-10 items-center">
            <div className="font-bold text-2xl">Okeke Divine</div>
            <div className="cursor-pointer" onClick={toggleSidebar}>
              <i className="fa-solid fa-times text-xl text-gray-400"></i>
            </div>
          </div>

          <div>
            <Link to="/" onClick={() => handleSetActiveLink("projects")}>
              <div
                className={`${
                  activeLink === "projects" ? "nav-link-active2" : ""
                } flex gap-2 text-[1.1rem] mb-5 text-gray-400 tracking-[0.2em]`}
              >
                <div>00</div>
                <div className="uppercase">Project</div>
              </div>
            </Link>
            <Link
              to="/resume"
              onClick={() => handleSetActiveLink("experience")}
            >
              <div
                className={`${
                  activeLink === "experience" ? "nav-link-active2" : ""
                } flex gap-2 text-[1.1rem] text-gray-400 tracking-[0.2em] mb-5`}
              >
                <div>01</div>
                <div className="uppercase">Experience</div>
              </div>
            </Link>
            <Link to="/resume" onClick={() => handleSetActiveLink("resume")}>
              <div
                className={`${
                  activeLink === "resume" ? "nav-link-active2" : ""
                } flex gap-2 text-[1.1rem] text-gray-400 tracking-[0.2em]`}
              >
                <div>02</div>
                <div className="uppercase">Resume</div>
              </div>
            </Link>
          </div>
        </div>
      </div>


      {/* time machine image */}
      {/* <img
        src={TimeMachineGif}
        className="cursor-pointer fixed bottom-5 right-0"
        width={100}
        height={100}
      /> */}
    </BrowserRouter>
  );
}

export default App;
