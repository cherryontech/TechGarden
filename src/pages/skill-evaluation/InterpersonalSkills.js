import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function InterpersonalSkills({
  nextStep,
  goBack,
  skills,
  selectedSkills,
  handleSkillChange,
  isLastPage,
}) {
  return (
    <EvaluationTemplate
      nextStep={nextStep}
      goBack={goBack}
      skills={skills}
      selectedSkills={selectedSkills}
      handleSkillChange={handleSkillChange}
      isLastPage={isLastPage}
    >
      {/* Add skill selection UI for UX skills here */}
    </EvaluationTemplate>
  );
}

InterpersonalSkills.propTypes = {
  nextStep: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
  selectedSkills: PropTypes.array.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
  isLastPage: PropTypes.bool.isRequired,
};

export default InterpersonalSkills;
