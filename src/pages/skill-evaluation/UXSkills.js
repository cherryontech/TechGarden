import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function UXSkills({ nextStep }) {
  return (
    <>
      <h1>UX Skills Evaluation Section</h1>
      <EvaluationTemplate nextStep={nextStep} />
    </>
  );
}

UXSkills.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default UXSkills;
