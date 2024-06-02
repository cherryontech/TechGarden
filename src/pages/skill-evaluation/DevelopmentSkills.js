import PropTypes from "prop-types";
import EvaluationTemplate from "../../components/EvaluationTemplate";

function DevelopmentSkills({ nextStep }) {
  return (
    <>
      <h1>Developer Skill Evaluation Section</h1>
      <EvaluationTemplate nextStep={nextStep} />
    </>
  );
}

DevelopmentSkills.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default DevelopmentSkills;
