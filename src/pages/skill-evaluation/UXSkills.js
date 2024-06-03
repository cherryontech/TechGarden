import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function UXSkills({ nextStep, goBack, role }) {
  return (
    <EvaluationTemplate nextStep={nextStep} goBack={goBack} role={role}>
      {/* Add skill selection UI for UX skills here */}
    </EvaluationTemplate>
  );
}

UXSkills.propTypes = {
  nextStep: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  role: PropTypes.object.isRequired,
};

export default UXSkills;
