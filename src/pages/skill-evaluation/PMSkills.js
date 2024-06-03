import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function PMSkills({ nextStep, goBack, role, isLastPage }) {
  return (
    <EvaluationTemplate
      nextStep={nextStep}
      goBack={goBack}
      role={role}
      isLastPage={isLastPage}
    >
      {/* Add skill selection UI for PM skills here */}
    </EvaluationTemplate>
  );
}

PMSkills.propTypes = {
  nextStep: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  role: PropTypes.object.isRequired,
  isLastPage: PropTypes.func.isRequired,
};

export default PMSkills;
