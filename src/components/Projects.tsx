import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard.tsx";

interface Repo {
  id: number;
  name: string;
  language: string;
  pushed_at: string;
  created_at: string;
  html_url: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  repos: Repo[];
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects(props: ProjectsProps) {
  const repos = props.repos;
  const [loadingComponent, setLoadingComponent] = useState("Loading...");
  const [totalRepos, setTotalRepos] = useState("-");
  const [firstTimeLoading,setFirstTimeLoading] = useState(true);
  useEffect(
    function () {
      if (repos.length > 0) {
        setLoadingComponent("");
        setTotalRepos(repos.length);
        setFirstTimeLoading(false);
      }
    },
    [repos]
  );

  return (
    <div>
      <div className="flex items-center justify-between text-white">
        <div className="flex gap-x-2 items-center">
          <div>
            <i className="fa-solid fa-code text-gray-400"></i>
          </div>
          <div className="font-bold text-xl">Github ({totalRepos})</div>
        </div>
        <div className="group flex gap-x-2 items-center cursor-pointer">
          <div className="opacity-0 duration-[1200ms] group-hover:opacity-100 pr-1 group-hover:pr-4">
            Live Projects
          </div>
          <div>
            <i className="fa-solid fa-arrow-right text-gray-400"></i>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <span className="text-white">{loadingComponent}</span>
        {repos.map((repo) => (
          <ProjectCard
            key={repo.id}
            lang={repo.language}
            repoName={repo.name}
            lastUpdated={new Date(repo.pushed_at).toLocaleDateString()}
            createdAt={new Date(repo.created_at).toLocaleDateString()}
            link={repo.html_url}
          />
        ))}
      </div>
      <div className="text-center text-gray-300">
        Inspired by{" "}
        <a
          className="text-white"
          target="_blank"
          href="https://www.kingslee.me/"
        >
          kingslee
        </a>
      </div>
    </div>
  );
}
