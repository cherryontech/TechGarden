import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function TechnicalProficiencies({ skills, selectedSkills, handleSkillChange }) {
  return (
    <EvaluationTemplate
      skills={skills}
      selectedSkills={selectedSkills}
      handleSkillChange={handleSkillChange}
    >
      {/* Add skill selection UI for development skills here */}
    </EvaluationTemplate>
  );
}

TechnicalProficiencies.propTypes = {
  skills: PropTypes.object.isRequired,
  selectedSkills: PropTypes.array.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
};

export default TechnicalProficiencies;
