import ProjectCard from "./ProjectCard.tsx";

export default function Projects(props) {
  const repos = props.repos;

  return (
    <div>
      <div className="flex items-center justify-between text-white">
        <div className="flex gap-x-2 items-center">
          <div>
            <i className="fa-solid fa-code text-gray-400"></i>
          </div>
          <div className="font-bold text-xl">Github</div>
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
        Inspired by <a className="text-white" target="_blank" href="https://www.kingslee.me/">kingslee</a>
      </div>
    </div>
  );
}
