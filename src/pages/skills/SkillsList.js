import { Link } from "react-router-dom";
import skillData from "../../data/SkillData";

function SkillsList() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl pt-28 pb-20 md:pt-36">
      <h2 className="text-2xl md:text-3xl font-semibold text-midnight-moss pb-9 md:pb-12">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillData.map((category, index) => (
          <div
            key={index}
            className="flex flex-col p-4 bg-transparent shadow-lg max-w-xs"
          >
            <div className="flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-midnight-moss">
                {category.title}
              </h2>
              <div className="flex flex-wrap pt-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="pb-3">
                    <Link
                      to={`/knowledge-hub/${encodeURIComponent(skill.name)}`}
                      className="pe-2 text-gray-moss hover:text-darker-cyan"
                      onClick={handleLinkClick}
                    >
                      {skill.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsList;
