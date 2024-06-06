import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function CareerRecommendations({ results }) {
  const [recommendedRole, setRecommendedRole] = useState("");
  const [matchPercentage, setMatchPercentage] = useState(0);

  useEffect(() => {
    // the count of selected skills for each role
    const roleCounts = {};
    results.forEach((skill) => {
      const roles = Array.isArray(skill.role) ? skill.role : [skill.role];
      roles.forEach((role) => {
        roleCounts[role] = (roleCounts[role] || 0) + 1;
      });
    });

    // the role with the highest count of selected skills
    let maxRoleCount = 0;
    let recommendedRole = "";
    Object.keys(roleCounts).forEach((role) => {
      if (roleCounts[role] > maxRoleCount) {
        maxRoleCount = roleCounts[role];
        recommendedRole = role;
      }
    });

    // if the user selects more skills for the recommended role than others
    const totalSkillsForRecommendedRole = roleCounts[recommendedRole];
    const otherRoles = Object.keys(roleCounts).filter(
      (role) => role !== recommendedRole
    );
    const totalSkillsForOtherRoles = otherRoles.reduce(
      (total, role) => total + roleCounts[role],
      0
    );

    if (
      totalSkillsForRecommendedRole > totalSkillsForOtherRoles &&
      totalSkillsForRecommendedRole > 0 &&
      totalSkillsForRecommendedRole > results.length / 2
    ) {
      const percentage = (totalSkillsForRecommendedRole / results.length) * 100;
      setMatchPercentage(percentage);
    } else {
      setMatchPercentage(0);
    }

    setRecommendedRole(recommendedRole);
  }, [results]);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold">Career Recommendations</h2>
      <p className="text-lg mt-4">
        Based on your selected skills, we recommend you to explore the{" "}
        <span className="font-semibold">{recommendedRole}</span> role
        {matchPercentage > 50 && (
          <span>
            {" "}
            with a match percentage of {matchPercentage.toFixed(2)}%.
          </span>
        )}
        .
      </p>
    </div>
  );
}

CareerRecommendations.propTypes = {
  results: PropTypes.array.isRequired,
};

export default CareerRecommendations;
