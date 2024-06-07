import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import roleData from "../../data/RoleData";

function CareerRecommendations({ results }) {
  const [recommendedRole, setRecommendedRole] = useState("");
  const [matchPercentage, setMatchPercentage] = useState(0);
  const [otherRoles, setOtherRoles] = useState([]);
  const [recommendedRoleDescription, setRecommendedRoleDescription] =
    useState("");
  const [recommendedRoleShortDescription, setRecommendedRoleShortDescription] =
    useState("");
  const [otherRolesDescriptions, setOtherRolesDescriptions] = useState([]);
  const [unselectedSkills, setUnselectedSkills] = useState([]);
  const [matchingSkills, setMatchingSkills] = useState([]);
  const [recommendedRoleImage, setRecommendedRoleImage] = useState(null);
  const [otherRolesUnselectedSkills, setOtherRolesUnselectedSkills] = useState(
    []
  );
  const [otherRolesMatchingSkills, setOtherRolesMatchingSkills] = useState([]);

  useEffect(() => {
    // count of selected skills for each role
    const roleCounts = {};
    results.forEach((skill) => {
      const roles = Array.isArray(skill.role) ? skill.role : [skill.role];
      roles.forEach((role) => {
        roleCounts[role] = (roleCounts[role] || 0) + 1;
      });
    });

    // calculate match percentages for all roles
    const rolePercentages = Object.keys(roleCounts).map((role) => {
      const roleInfo = roleData.find((r) => r.title === role);
      const percentage = roleInfo
        ? (roleCounts[role] / roleInfo.totalSkills) * 100
        : 0;
      return {
        role,
        percentage: Math.ceil(percentage),
      };
    });

    // sort roles by match percentage
    rolePercentages.sort((a, b) => b.percentage - a.percentage);

    // set the recommended role and its match percentage
    const recommended = rolePercentages[0];
    if (recommended && recommended.percentage >= 50) {
      setRecommendedRole(recommended.role);
      setMatchPercentage(recommended.percentage);

      // set long description and short descroption for recommended role
      const roleInfo = roleData.find((r) => r.title === recommended.role);
      setRecommendedRoleDescription(roleInfo ? roleInfo.longDescription : "");
      setRecommendedRoleShortDescription(
        roleInfo ? roleInfo.shortDescription : ""
      );

      // set recommended role image
      setRecommendedRoleImage(roleInfo ? roleInfo.image : null);

      // calculate unselected skills for recommended role
      const selectedSkills = results.map((skill) => skill.name);
      const unselected = roleInfo.skills.filter(
        (skill) => !selectedSkills.includes(skill.name)
      );
      setUnselectedSkills(unselected);

      // matching skills for recommended role
      const matching = roleInfo.skills.filter((skill) =>
        selectedSkills.includes(skill.name)
      );
      setMatchingSkills(matching);

      // other roles to consider
      const otherRolesData = rolePercentages.slice(1, 3);
      setOtherRoles(otherRolesData);

      // long description, unselected skills, and matching skills for other roles to consider
      const otherRolesDesc = [];
      const otherRolesUnselected = [];
      const otherRolesMatching = [];
      otherRolesData.forEach((role) => {
        const roleInfo = roleData.find((r) => r.title === role.role);
        otherRolesDesc.push(roleInfo ? roleInfo.longDescription : "");
        const unselectedForRole = roleInfo
          ? roleInfo.skills.filter(
              (skill) => !selectedSkills.includes(skill.name)
            )
          : [];
        otherRolesUnselected.push(unselectedForRole);
        const matchingForRole = roleInfo
          ? roleInfo.skills.filter((skill) =>
              selectedSkills.includes(skill.name)
            )
          : [];
        otherRolesMatching.push(matchingForRole);
      });
      setOtherRolesDescriptions(otherRolesDesc);
      setOtherRolesUnselectedSkills(otherRolesUnselected);
      setOtherRolesMatchingSkills(otherRolesMatching);
    } else {
      setRecommendedRole("");
      setMatchPercentage(0);
      setRecommendedRoleDescription("");
      setRecommendedRoleShortDescription("");
      setUnselectedSkills([]);
      setMatchingSkills([]);
      setOtherRoles([]);

      // set all roles with less than 50% match
      const otherRolesData = rolePercentages.slice(0, 3); // get top three roles
      setOtherRoles(otherRolesData);

      // set long descriptions, unselected skills, and matching skills for other roles to consider
      const otherRolesDesc = [];
      const otherRolesUnselected = [];
      const otherRolesMatching = [];
      otherRolesData.forEach((role) => {
        const roleInfo = roleData.find((r) => r.title === role.role);
        otherRolesDesc.push(roleInfo ? roleInfo.longDescription : "");
        const unselectedForRole = roleInfo
          ? roleInfo.skills.filter(
              (skill) => !results.some((s) => s.name === skill.name)
            )
          : [];
        otherRolesUnselected.push(unselectedForRole);
        const matchingForRole = roleInfo
          ? roleInfo.skills.filter((skill) =>
              results.some((s) => s.name === skill.name)
            )
          : [];
        otherRolesMatching.push(matchingForRole);
      });
      setOtherRolesDescriptions(otherRolesDesc);
      setOtherRolesUnselectedSkills(otherRolesUnselected);
      setOtherRolesMatchingSkills(otherRolesMatching);
    }
  }, [results]);

  // generate the email content
  const generateEmailContent = () => {
    const subject = "Career Evaluation Results";
    const body = `
      Recommended Role: ${recommendedRole}
      Match Percentage: ${matchPercentage}%
      Role Description: ${recommendedRoleDescription}
      
      Skills to Improve:
      ${unselectedSkills.map((skill) => `- ${skill.name}`).join("\n")}
      
      Current Matching Skills:
      ${matchingSkills.map((skill) => `- ${skill.name}`).join("\n")}
      
      Other Roles to Consider:
      ${otherRoles
        .map(
          (role) => `
        - Role: ${role.role}
          Percentage Match: ${role.percentage}%
          Description: ${
            roleData.find((r) => r.title === role.role)?.longDescription
          }
      `
        )
        .join("\n")}
    `;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="text-center my-40">
      {recommendedRole ? (
        <div className="mt-4">
          <p className="text-2xl">Congratulations! </p>
          <p>You are just a few skills away from being a </p>{" "}
          <p className="font-semibold text-4xl">{recommendedRole}</p>
          {recommendedRoleImage && (
            <img
              src={recommendedRoleImage}
              alt={recommendedRole}
              className="mt-2 mx-auto h-72 w-72"
            />
          )}
          {recommendedRoleShortDescription && (
            <>
              <p className="mt-2 text-base">
                {recommendedRoleShortDescription}
              </p>
            </>
          )}
          {matchPercentage > 50 && (
            <>
              <p> Your current skills match </p>
              <p className="text-4xl"> {matchPercentage}%</p>
              <p>of the top skills required in this position.</p>
            </>
          )}
          {recommendedRoleDescription && (
            <>
              <p className="text-lg font-semibold mt-4">
                The {recommendedRole} role
              </p>
              <p className="mt-2 text-base">{recommendedRoleDescription}</p>
              <p className="text-lg font-semibold mt-4">
                Grow your {recommendedRole} skills
              </p>
              {unselectedSkills.length > 0 && (
                <div>
                  <ul className="list-disc list-inside">
                    {unselectedSkills.map((skill) => (
                      <li key={skill.name} className="text-base font-medium">
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {matchingSkills.length > 0 && (
                <div>
                  <p className="font-semibold text-lg mt-4">
                    Your current matching skills
                  </p>
                  <ul className="list-disc list-inside">
                    {matchingSkills.map((skill) => (
                      <li key={skill.name} className="text-base font-medium">
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <p className="text-lg mt-4">
          Congrats, your garden has the potential for multiple roles. Dive into
          each opportunity and discover where your unique talents truly thrive.
        </p>
      )}
      <div className="pt-4">
        <button
          onClick={generateEmailContent}
          className="rounded-md border border-darker-cyan hover:bg-oasis-blue shadow-md text-base lg:text-lg font-semibold text-midnight-moss bg-tropical-cyan justify-center p-2 md:p-4 mt-6"
        >
          Email Evaluation Results
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Other roles to consider</h3>
        <ul className="mt-2">
          {otherRoles.map((role, index) => (
            <li key={role.role} className="text-lg mt-2 flex-row ">
              {role.role}- {role.percentage}% skills match
              {roleData.find((r) => r.title === role.role)?.image && (
                <img
                  src={roleData.find((r) => r.title === role.role)?.image}
                  alt={role.role}
                  className="h-72 w-72 mx-auto"
                />
              )}
              {otherRolesDescriptions[index] && (
                <p className="text-base">{otherRolesDescriptions[index]}</p>
              )}
              <p className="text-base font-semibold">
                Grow into a {role.role}:
              </p>
              {otherRolesUnselectedSkills[index] && (
                <ul className="list-disc list-inside">
                  {otherRolesUnselectedSkills[index].map((skill) => (
                    <li key={skill.name} className="text-base font-medium">
                      {skill.name}
                    </li>
                  ))}
                </ul>
              )}
              {otherRolesMatchingSkills[index] && (
                <div>
                  <p className="font-semibold text-lg mt-4">
                    Your current matching skills
                  </p>
                  <ul className="list-disc list-inside">
                    {otherRolesMatchingSkills[index].map((skill) => (
                      <li key={skill.name} className="text-base font-medium">
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CareerRecommendations.propTypes = {
  results: PropTypes.array.isRequired,
};

export default CareerRecommendations;
