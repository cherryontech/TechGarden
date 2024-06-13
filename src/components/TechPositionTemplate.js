import PropTypes from "prop-types";
import roleData from "../data/RoleData";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

function TechPositionTemplate({ roleTitle }) {
  const role = roleData.find((role) => role.title === roleTitle);

  if (!role) {
    return <div>Role not found</div>;
  }

  const technicalSkills = role.skills.filter(
    (skill) => skill.type === "technical"
  );

  const softSkills = role.skills.filter((skill) => skill.type === "soft");

  return (
    <div
      role="main"
      className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-6 md:mx-0 pt-28 pb-20 md:pt-36"
    >
      <div className="flex flex-col md:flex-row md:mx-auto items-start">
        <img
          src={role.image}
          alt={role.title}
          className="w-full md:h-80 md:w-80 md:mr-8 border-2 rounded border-light-orange"
        />
        <div className="mt-4 md:mt-0 text-left space-y-3">
          <h1 className="text-2xl font-bold">The {role.title} Role</h1>
          <div className="text-base">{role.longDescription}</div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-12 md:pt-20">
        <h4 className="text-xl font-semibold pb-4 md:pb-8">
          Grow Your Technical Skills
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technicalSkills.map((skill, index) => (
            <li key={`${skill.title}-${index}`}>
              <a
                href={`/knowledge-hub/${encodeURIComponent(skill.name)}`}
                className="flex justify-between items-center text-base rounded-md shadow-lg hover:bg-oasis-blue shadow-md font-semibold text-midnight-moss bg-tropical-cyan sm:w-80 lg:w-96 py-1.5 px-4"
              >
                <span className="truncate pe-2">{skill.name}</span>
                <div className="arrow-container">
                  <ArrowRightIcon className="h-5 w-5 text-midnight-moss" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center pt-12 md:pt-16">
        <h4 className="text-xl font-semibold mt-4 md:mt-0 pb-4 md:pb-8">
          Grow Your Soft Skills
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {softSkills.map((skill, index) => (
            <li key={`${skill.title}-${index}`}>
              <a
                href={`/knowledge-hub/${encodeURIComponent(skill.name)}`}
                className="flex justify-between items-center text-base rounded-md shadow-lg hover:bg-oasis-blue shadow-md font-semibold text-midnight-moss bg-tropical-cyan sm:w-80 lg:w-96 py-1.5 px-4"
              >
                <span className="truncate pe-1">{skill.name}</span>
                <div className="arrow-container">
                  <ArrowRightIcon className="h-5 w-5 text-midnight-moss" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

TechPositionTemplate.propTypes = {
  roleTitle: PropTypes.string.isRequired,
};

export default TechPositionTemplate;
