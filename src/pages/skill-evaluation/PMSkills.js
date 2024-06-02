import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function PMSkills({ nextStep }) {
  return (
    <>
      <h1>Product Manager Skills Evaluation Section</h1>
      <EvaluationTemplate nextStep={nextStep} />
    </>
  );
}

PMSkills.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default PMSkills;
