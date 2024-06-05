import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function AdministrativeCompetencies({
  nextStep,
  goBack,
  skills,
  selectedSkills,
  handleSkillChange,
}) {
  return (
    <EvaluationTemplate
      nextStep={nextStep}
      goBack={goBack}
      skills={skills}
      selectedSkills={selectedSkills} // Pass selectedSkills as a prop
      handleSkillChange={handleSkillChange}
    >
      {/* Add skill selection UI for PM skills here */}
    </EvaluationTemplate>
  );
}

AdministrativeCompetencies.propTypes = {
  nextStep: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
  selectedSkills: PropTypes.array.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
};

export default AdministrativeCompetencies;
