import PropTypes from "prop-types";

function CareerRecommendations({ results }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Career Recommendations</h1>
      {results ? (
        <div>
          <h2 className="text-xl mb-4">
            Based on your selected skills, we recommend the following careers:
          </h2>
          <ul>
            {results.map((skill, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">{skill.name}</span>:{" "}
                {skill.description}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No skills selected or results available.</p>
      )}
    </div>
  );
}

CareerRecommendations.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default CareerRecommendations;
