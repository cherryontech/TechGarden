import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function TechnicalProficiencies({
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
      selectedSkills={selectedSkills}
      handleSkillChange={handleSkillChange}
    >
      {/* Add skill selection UI for development skills here */}
    </EvaluationTemplate>
  );
}

TechnicalProficiencies.propTypes = {
  nextStep: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
  selectedSkills: PropTypes.array.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
};

export default TechnicalProficiencies;
