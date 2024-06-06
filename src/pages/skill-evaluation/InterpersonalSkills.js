import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function InterpersonalSkills({ skills, selectedSkills, handleSkillChange }) {
  return (
    <EvaluationTemplate
      skills={skills}
      selectedSkills={selectedSkills}
      handleSkillChange={handleSkillChange}
    >
      {/* Add skill selection UI for UX skills here */}
    </EvaluationTemplate>
  );
}

InterpersonalSkills.propTypes = {
  skills: PropTypes.object.isRequired,
  selectedSkills: PropTypes.array.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
};

export default InterpersonalSkills;
