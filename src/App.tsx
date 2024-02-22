import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios";

import "./index.css";
import GithubIcon from "./components/GithubIcon.tsx";
import LinkedinIcon from "./components/LinkedinIcon.tsx";
import EmailIcon from "./components/EmailIcon.tsx";
import Projects from "./components/Projects.tsx";
import Resume from "./components/Resume.tsx";

function App() {
  const [repos, setRepos] = useState([]);

  const api = "https://api.github.com/users/okeke-divine/repos?sort=pushed";

  useEffect(() => {
    const fetchRepos = async () => {
      // setIsLoading(true);
      // setError(null);

      try {
        const response = await axios.get(api);
        setRepos(response.data);
      } catch (error) {
        // setError(error);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap wd-100 p-[100px]">
        <div className="w-1/2 sticky top-0">
          <div className="w-4/5">
            <div className="text-white font-bold text-6xl">Okeke Divine</div>
            <div className="text-white font-semibold text-2xl pt-5">
              Full Stack Web Developer
            </div>
            <div className="pt-10 text-gray-400 line-height-2">
              Hello, I'm <span className="text-white">Divine</span>, a full
              stack web developer. I love{" "}
              <span className="text-white">problem solving</span> and critical
              thinking, I live for the challenge, I use coding as a tool to{" "}
              <span className="text-white">solve problems</span>. I am currently
              interested in{" "}
              <span className="text-white">building interactive</span> UI's for
              game development.
            </div>
            <div className="pt-10">
              <div className="nav-link-active flex group items-center text-gray-400 hover:text-white gap-3 w-fit justify-items-center cursor-pointer text-xs tracking-[.2em]">
                <div>00</div>
                <div>
                  <div className="bg-white w-6 h-[1px] group-hover:w-16 duration-300"></div>
                </div>
                <div className="uppercase">Projects</div>
              </div>
              <div className="flex group pt-10 items-center text-gray-400 hover:text-white gap-3 w-fit justify-items-center cursor-pointer text-xs tracking-[.2em]">
                <div>01</div>
                <div>
                  <div className="bg-white w-6 h-[1px] group-hover:w-16 duration-300"></div>
                </div>
                <div className="uppercase">Resume</div>
              </div>
            </div>
            <div className="pt-[6.8rem]">
              <div className="flex flex-wrap gap-3">
                <div className="text-white flex gap-2 items-center">
                  <span>
                    <i className="fab fa-github"></i>
                  </span>
                  Github
                </div>
                <div className="text-white flex gap-2 items-center">
                  <span>
                    <i className="fab fa-linkedin"></i>
                  </span>
                  Linkedin
                </div>
                <div className="text-white flex gap-2 items-center">
                  <span>
                    <i className="fa-solid fa-at"></i>
                  </span>
                  Email
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-[90%]">
          <Router>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Projects />
        </Route>
      </Switch>
    </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
