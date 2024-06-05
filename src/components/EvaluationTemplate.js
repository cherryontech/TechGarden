import PropTypes from "prop-types";
import { Checkbox } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function EvaluationTemplate({
  goBack,
  nextStep,
  skills,
  selectedSkills,
  children,
  isLastPage,
  handleSkillChange,
}) {
  const toggleSkill = (skill) => {
    const updatedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill];

    handleSkillChange(updatedSkills);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-screen p-4">
        <h2 className="text-2xl">Select the skills you currently have</h2>
        <h2 className="text-xl text-center mb-4 mt-12 mb-6">{skills.title}</h2>
        {skills.skills.map((skill, index) => (
          <Checkbox
            key={index}
            checked={selectedSkills.includes(skill)}
            onChange={() => toggleSkill(skill)}
            className={`flex items-start justify-between border border-gray-300 cursor-pointer hover:bg-lightest-cyan hover:border-light-cyan rounded-lg p-3 my-4
            ${
              selectedSkills.includes(skill)
                ? "bg-lightest-cyan"
                : "bg-transparent"
            }`}
          >
            <div className="text-sm text-left">
              <p className="font-semibold text-gray-700">{skill.name}</p>
              <p className="text-gray-600">{skill.description}</p>
            </div>
            <div className="ps-6">
              <CheckCircleIcon
                className={`${
                  selectedSkills.includes(skill)
                    ? "h-5 w-5 text-tropical-cyan"
                    : "h-4 w-4 text-transparent border border-gray-300 rounded-full"
                }`}
              />
            </div>
          </Checkbox>
        ))}

        {children}
        <div className="flex justify-between mt-12">
          {goBack && (
            <button
              onClick={goBack}
              className="rounded-md shadow-lg text-base font-semibold text-midnight-moss bg-light-gray hover:bg-darker-gray justify-center px-9 md:px-12 py-3"
            >
              Back
            </button>
          )}
          <button
            onClick={nextStep}
            className="rounded-md shadow-lg text-base font-semibold text-midnight-moss bg-tropical-cyan hover:bg-oasis-blue justify-center px-9 md:px-12 py-3"
          >
            {isLastPage ? "Find My Career" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

EvaluationTemplate.propTypes = {
  goBack: PropTypes.func,
  nextStep: PropTypes.func.isRequired,
  skills: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  selectedSkills: PropTypes.array.isRequired, // Define selectedSkills prop
  children: PropTypes.node,
  isLastPage: PropTypes.bool,
  handleSkillChange: PropTypes.func.isRequired,
};

export default EvaluationTemplate;
