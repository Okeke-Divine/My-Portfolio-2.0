const ResumeCard = ({
  lang = "",
  repoName,
  lastUpdated,
  createdAt,
  link
}) => {
  return (
    <>
      <a href={link} className="cursor-pointer group" target="_blank">
        <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200">
          <div>
            <p className="text-gray-300 mb-2">{lang}</p>
            <h2 className="text-2xl text-white font-bold mb-5">{repoName}</h2>
            <div className="text-gray-300 mb-3 flex gap-x-5 gap-y-2">
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

export default ResumeCard;
