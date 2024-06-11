import PropTypes from "prop-types";
import SkillImage from "../assets/skills.png";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function SkillsTemplate({ skill }) {
  const roles = Array.isArray(skill.role) ? skill.role : [skill.role];

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-xs md:max-w-2xl lg:max-w-3xl xl:max-w-5xl pt-28 pb-20 md:pt-36">
      <div className="flex flex-col md:flex-row items-start">
        <img
          src={SkillImage}
          alt="female identifying at a desk with computer and plants"
          className="w-full md:h-80 md:w-80 md:mr-8 border-2 rounded border-light-orange"
        />
        <div className="mt-4 md:mt-0 text-left space-y-3">
          <h1 className="text-2xl font-bold capitalize">{skill.name}</h1>
          <p className="text-lg">{skill.description}</p>
          {skill.resources.length > 0 ? (
            <>
              <p className="text-lg">
                You can find the resources below to help you learn more about
                this skill:
              </p>
              <ul className="list-decimal list-inside">
                {skill.resources.map((resource, index) => (
                  <li key={index} className="p-2">
                    <a
                      href={resource.url}
                      className="font-semibold text-darker-cyan hover:text-darkest-cyan"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="pt-12 text-lg">Resources coming soon!</p>
          )}
        </div>
      </div>

      {skill.related.length > 0 && (
        <div className="flex flex-col items-center pt-12">
          <h4 className="text-xl font-semibold pb-4">Explore Related Skills</h4>
          <div className="flex justify-center">
            <ul className="md:flex flex-wrap">
              {skill.related.map((relatedSkill, index) => (
                <li key={index} className="text-start w-full md:w-auto p-2">
                  <Link
                    to={`/knowledge-hub/${encodeURIComponent(relatedSkill)}`}
                    className="flex justify-between items-center rounded-md shadow-lg hover:bg-oasis-blue shadow-md font-semibold text-midnight-moss bg-tropical-cyan w-80 md:w-full py-1.5 px-4"
                    onClick={handleLinkClick}
                  >
                    <span className="truncate pe-2">{relatedSkill}</span>
                    <ArrowRightIcon className="h-5 w-5 text-midnight-moss" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center pt-12">
        <h4 className="text-xl font-semibold pb-4">
          Roles That Require This Skill
        </h4>
        <div className="flex justify-center">
          <ul className="md:flex flex-wrap">
            {roles.map((role, index) => (
              <li key={index} className="text-start w-full md:w-auto p-2">
                <Link
                  to={`/${encodeURIComponent(
                    role.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                  className="flex justify-center items-center rounded-md shadow-lg hover:bg-oasis-blue shadow-md font-medium text-midnight-moss bg-lightest-cyan border border-tropical-cyan w-80 md:w-full py-1.5 px-4"
                  onClick={handleLinkClick}
                >
                  <span className="flex items-center justify-start w-4 h-4">
                    <CheckIcon className="h-5 w-5 text-midnight-moss" />
                  </span>
                  <span className="ps-2">{role}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

SkillsTemplate.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    role: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    related: PropTypes.arrayOf(PropTypes.string).isRequired,
    resources: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default SkillsTemplate;
