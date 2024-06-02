import PropTypes from "prop-types";

function EvaluationTemplate({ nextStep, children }) {
  return (
    <>
      <h1> Template for Skills Evaluation</h1>
      {children}
      <button
        onClick={nextStep}
        className="rounded-md hover:bg-tropical-cyan shadow-md text-base font-semibold text-midnight-moss bg-tropical-cyan justify-center w-full py-3"
      >
        Next
      </button>
    </>
  );
}

EvaluationTemplate.propTypes = {
  nextStep: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default EvaluationTemplate;
