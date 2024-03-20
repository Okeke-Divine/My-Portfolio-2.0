export default function Experience({ experiences }) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between text-white">
          <div className="flex gap-x-2 items-center">
            <div>
              {/* <i className="fa-solid fa-user"></i> */}
            </div>
            <div className="font-bold text-xl">Experience</div>
          </div>
        </div>
        <div className="mt-5">
          {experiences.map((experience, index) => (
            <div key={index} className="block md:flex projectCard mb-5 p-5 gap-x-3">
              <div className="mb-2 md:mb-0 w-full md:w-1/6 text-gray-400 uppercase text-sm font-bold">{experience.date}</div>
              <div className="w-full md:w-4/6">
                <div className="text-white font-bold">{experience.company}</div>
                <div className="text-gray-400 mt-2">
                  {experience.summary}
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {experience.technology.map((technology, index) => (
                    <div key={index} className="projectTags otherProjectTags">{technology}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
