import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function AdministrativeCompetencies({ nextStep, goBack, skills }) {
  return (
    <EvaluationTemplate
      nextStep={nextStep}
      goBack={goBack}
      skills={skills}
    >
      {/* Add skill selection UI for PM skills here */}
    </EvaluationTemplate>
  );
}

AdministrativeCompetencies.propTypes = {
  nextStep: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
};

export default AdministrativeCompetencies;
