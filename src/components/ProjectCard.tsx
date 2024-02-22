interface ProjectCardProps {
  repoName: string;
  lastUpdated: string;
  createdAt: string;
  link: string;
  lank: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  lang = "",
  repoName,
  lastUpdated,
  createdAt,
  link,
}) => {
  return (
    <>
      <a href={link} className="cursor-pointer group" target="_blank">
        <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200">
          <div>
            <p className="text-gray-300 mb-1 uppercase text-[0.7rem] tracking-[0.2em]">
              {lang}
            </p>
            <h2 className="text-2xl text-white font-bold mb-5">{repoName}</h2>
            <div className="text-gray-300 mb-3 gap-x-5 gap-y-2 flex flex-wrap w-full">
              <div>Last Updated: {lastUpdated}</div>
              <div>Created At: {createdAt}</div>
            </div>
            <div className="flex gap-2 items-center text-gray-300">
              <div>
                <i className="fa-solid fa-code-branch text-[0.7rem] text-gray-400"></i>
              </div>
              <div>Github</div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;
