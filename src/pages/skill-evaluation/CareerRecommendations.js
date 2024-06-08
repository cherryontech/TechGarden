import React, { useEffect, useState } from "react";
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
    <div className="text-center my-28 md:my-40">
      {recommendedRole ? (
        <div className="mt-4">
          <div className="border-2 rounded border-light-orange flex flex-col md:flex-row md:max-w-4xl md:mx-auto items-center pt-3 pb-10 mx-8 md:pt-0 md:pb-0">
            {recommendedRoleImage && (
              <img
                src={recommendedRoleImage}
                alt={recommendedRole}
                className="w-full	 md:h-80 md:w-80 md:mr-8"
              />
            )}
            <div className="mt-4 md:mt-0 text-center">
              <p className="text-2xl">Congratulations!</p>
              <p className="text-lg pt-3">
                You are just a few skills away from being a
              </p>
              <p className="font-semibold text-4xl pt-3">{recommendedRole}</p>
              {recommendedRoleShortDescription && (
                <p className="text-base pt-3">
                  {recommendedRoleShortDescription}
                </p>
              )}
              {matchPercentage > 50 && (
                <>
                  <p className="pt-3">Your current skills match</p>
                  <p className="font-semibold text-4xl">{matchPercentage}%</p>
                  <p>of the top skills required in this position.</p>
                </>
              )}
            </div>
          </div>
          {recommendedRoleDescription && (
            <div className="mt-4 md:mt-12">
              <div className="flex flex-col md:flex-row md:max-w-4xl items-start justify-center md:justify-between pt-3 pb-10 mx-8 md:pt-0 md:pb-0">
                <div className="text-start md:w-5/12	">
                  <p className="text-xl font-semibold mt-3 md:mt-0">
                    The {recommendedRole} Role
                  </p>
                  <div className="mt-2 text-lg">
                    {recommendedRoleDescription}
                  </div>
                </div>
                <div className="text-start md:w-5/12">
                  <p className="text-xl font-semibold mt-6 md:mt-0">
                    Grow Your {recommendedRole} Skills
                  </p>
                  {unselectedSkills.length > 0 && (
                    <div className="mt-2">
                      <ul className="flex flex-col items-center md:items-start space-y-4">
                        {unselectedSkills.map((skill, index) => (
                          <li
                            key={`${skill.name}-${index}`}
                            className="text-medium font-medium w-full"
                          >
                            <button className="flex justify-center items-center rounded-md shadow-lg hover:bg-oasis-blue shadow-md  font-semibold text-midnight-moss bg-tropical-cyan w-full py-1.5">
                              {skill.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {matchingSkills.length > 0 && (
                <div className="flex flex-col md:max-w-4xl items-start pt-3 pb-10 mx-4 md:mx-8 md:pt-0 md:pb-0">
                  <p className="font-semibold text-start text-xl mt-4">
                    Your Current Matching Skills
                  </p>
                  <ul className="flex flex-wrap">
                    {matchingSkills.map((skill, index) => (
                      <li
                        key={`${skill.name}-${index}`}
                        className="text-start w-full md:w-auto pe-3 py-2"
                      >
                        <button className="truncate rounded-md shadow-lg hover:bg-oasis-blue shadow-md font-medium text-midnight-moss bg-lightest-cyan border border-tropical-cyan w-80 md:w-full py-1.5 px-4">
                          {skill.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
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
        {otherRoles.map((role, index) => (
          <React.Fragment key={`${role.role}-${index}`}>
            {role.role}- {role.percentage}% skills match
            <div
              key={`${role.role}-${index}`}
              className="flex flex-col md:flex-row md:max-w-3xl md:mx-auto items-start pt-3 pb-10 mx-8 md:pt-0 md:pb-0"
            >
              {roleData.find((r) => r.title === role.role)?.image && (
                <img
                  src={roleData.find((r) => r.title === role.role)?.image}
                  alt={role.role}
                  className="w-full	md:h-80 md:w-80 md:mr-8 border-2 rounded border-light-orange"
                />
              )}
              <div className="mt-4 md:mt-0 text-left space-y-3">
                <h4 className="text-xl font-bold">The {role.role} Role</h4>
                {otherRolesDescriptions[index] && (
                  <div className="text-base">
                    {otherRolesDescriptions[index]}
                  </div>
                )}
              </div>
            </div>
            <p className="text-base font-semibold mt-4">
              Grow into a {role.role}:
            </p>
            {otherRolesUnselectedSkills[index] && (
              <ul className="list-disc list-inside">
                {otherRolesUnselectedSkills[index].map((skill, index) => (
                  <li
                    key={`${skill.name}-${index}`}
                    className="text-base font-medium"
                  >
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
                  {otherRolesMatchingSkills[index].map((skill, index) => (
                    <li
                      key={`${skill.name}-${index}`}
                      className="text-base font-medium"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

CareerRecommendations.propTypes = {
  results: PropTypes.array.isRequired,
};

export default CareerRecommendations;
