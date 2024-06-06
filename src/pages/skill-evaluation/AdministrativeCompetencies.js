import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function AdministrativeCompetencies({
  skills,
  selectedSkills,
  handleSkillChange,
}) {
  return (
    <EvaluationTemplate
      skills={skills}
      selectedSkills={selectedSkills}
      handleSkillChange={handleSkillChange}
    >
      {/* Add skill selection UI for PM skills here */}
    </EvaluationTemplate>
  );
}

AdministrativeCompetencies.propTypes = {
  skills: PropTypes.object.isRequired,
  selectedSkills: PropTypes.array.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
};

export default AdministrativeCompetencies;
