import { useState } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function EvaluationTemplate({ goBack, nextStep, role, children, isLastPage }) {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-screen p-4">
        <h2 className="text-2xl">Select the skills you already have</h2>
        <h2 className="text-xl text-center mb-4">{role.title} Skills</h2>
        {role.skills.map((skill, index) => (
          <Checkbox
            key={index}
            checked={selectedSkills.includes(skill)}
            onChange={() => toggleSkill(skill)}
            className="flex items-start justify-between border hover:bg-lighter-cyan hover:border-oasis-blue rounded-lg p-3 mb-2 w-96	"
          >
            <div className="text-sm text-left">
              <p className="font-semibold pe-4 text-gray-700">{skill.name}</p>
              <p className="text-gray-600">{skill.description}</p>
            </div>
            <CheckCircleIcon
              className={`${
                selectedSkills.includes(skill)
                  ? "h-5 w-5 text-tropical-cyan"
                  : "h-4 w-4 text-transparent border rounded-full"
              }`}
            />
          </Checkbox>
        ))}

        {children}
        <div className="flex justify-between mt-4">
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
  role: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  children: PropTypes.node,
  isLastPage: PropTypes.bool.isRequired, // New prop to indicate if it's the last page
};

export default EvaluationTemplate;
