import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function DevelopmentSkills({ nextStep, goBack, role }) {
  return (
    <EvaluationTemplate nextStep={nextStep} goBack={goBack} role={role}>
      {/* Add skill selection UI for development skills here */}
    </EvaluationTemplate>
  );
}

DevelopmentSkills.propTypes = {
  nextStep: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  role: PropTypes.object.isRequired,
};

export default DevelopmentSkills;
