import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import roleData from "../../data/RoleData";
import AllRoles from "../../assets/all-roles.png";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

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
  const [accordionStates, setAccordionStates] = useState({});

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
    const subject = "Your Career Evaluation Results";

    const body = `
    Hello,

    Thank you for using our Career Evaluation tool. Here are your personalized results:

    Recommended Role: ${recommendedRole}
    Match Percentage: ${matchPercentage}%
    
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
    `
      )
      .join("\n")}

    To explore more about these roles and skills, you can visit our website at techgarden.netlify.app/.

    Best regards,
    The TechGarden Team
  `;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // accordian
  const toggleAccordion = (index) => {
    setAccordionStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  };

  return (
    <div
      role="main"
      className="max-w-sm md:max-w-2xl lg:max-w-4xl text-center px-6 md:px-0 mt-28 mb-20 md:mt-40 md:mb-40"
    >
      <h1 className="text-2xl md:text-3xl text-start font-semibold text-midnight-moss pb-4 md:pb-6">
        Career Recommendations Based on Your Skills
      </h1>
      {recommendedRole ? (
        <div className="mt-4">
          <div className="border-2 rounded border-light-orange flex flex-col md:flex-row md:mx-auto items-center pt-3 pb-10 md:pt-0 md:pb-0">
            {recommendedRoleImage && (
              <img
                src={recommendedRoleImage}
                alt={recommendedRole}
                className="w-full	md:h-80 md:w-80 md:mr-8"
              />
            )}
            <div className="mt-4 lg:mt-0 px-4 xl:px-0 text-center">
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
                  <p className="md:pb-4 lg:pb-0">
                    of the top skills required in this position.
                  </p>
                </>
              )}
            </div>
          </div>

          {recommendedRoleDescription && (
            <div className="mt-4 md:mt-28">
              <div className="flex flex-col md:flex-row md:max-w-4xl justify-center md:justify-between pt-3 pb-10 md:mx-8 md:pt-0 md:pb-0">
                <div className="text-start md:w-5/12">
                  <p className="text-xl font-semibold mt-4 md:mt-0">
                    The {recommendedRole} Role
                  </p>
                  <div className="mt-2 text-lg">
                    {recommendedRoleDescription}
                  </div>
                </div>
                <div className="md:w-5/12 mt-4 md:mt-0">
                  <p className="text-xl font-semibold mt-4 md:mt-0">
                    Grow Your {recommendedRole} Skills
                  </p>

                  {unselectedSkills.length > 0 && (
                    <div className="mt-2 flex justify-center">
                      <ul className="flex flex-col items-start space-y-4">
                        {unselectedSkills.map((skill, index) => (
                          <li
                            key={`${skill.name}-${index}`}
                            className="text-medium font-medium w-full"
                          >
                            <a
                              role="button"
                              href={`/knowledge-hub/${encodeURIComponent(
                                skill.name
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex justify-between items-center rounded-md shadow-lg hover:bg-oasis-blue shadow-md font-semibold text-midnight-moss bg-tropical-cyan w-72 md:w-80 lg:w-96 py-1.5 px-4"
                              aria-label={`Learn more about ${skill.name} in the knowledge hub`}
                            >
                              <span className="truncate pe-1">
                                {skill.name}
                              </span>
                              <div className="arrow-container">
                                <ArrowRightIcon className="h-5 w-5 text-midnight-moss" />
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {matchingSkills.length > 0 && (
                <div className="flex flex-col md:max-w-4xl md:items-start justify-center pt-3 pb-10 md:mx-8 md:pt-0 md:pb-0 md:mt-28">
                  <h6 className="font-semibold text-xl mt-4">
                    Your Current Matching Skills
                  </h6>
                  <div className="flex justify-center">
                    <ul className="md:flex flex-wrap">
                      {matchingSkills.map((skill, index) => (
                        <li
                          key={`${skill.name}-${index}`}
                          className="text-start w-full md:w-auto md:pe-3 py-2"
                        >
                          <a
                            role="button"
                            href={`/knowledge-hub/${encodeURIComponent(
                              skill.name
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center rounded-md shadow-lg hover:bg-oasis-blue shadow-md font-medium text-midnight-moss bg-lightest-cyan border border-tropical-cyan w-72 md:w-full py-1.5 px-4"
                            aria-label={`Learn more about ${skill.name} in the knowledge hub`}
                          >
                            <span className="flex items-center justify-start w-4 h-4">
                              <CheckIcon className="h-5 w-5 text-midnight-moss" />
                            </span>
                            <span className="truncate ps-2">{skill.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:max-w-4xl items-center pt-3 pb-10 md:pt-0 md:pb-0">
          <img
            src={AllRoles}
            alt="three animated persons on a computer"
            className="w-full	md:h-80 md:w-80 md:mr-10"
          />
          <p className="text-2xl text-start mt-4 md:mt-0">
            Congrats, your garden has the potential for multiple roles. Dive
            into each opportunity and discover where your unique talents truly
            thrive.
          </p>
        </div>
      )}
      <div className="md:my-14">
        <button
          onClick={generateEmailContent}
          className="rounded-md border border-darker-cyan hover:bg-oasis-blue shadow-md text-base lg:text-lg font-semibold text-midnight-moss bg-tropical-cyan justify-center p-3 md:p-4 mt-6"
          aria-label="Email evaluation results"
        >
          Email Evaluation Results
        </button>
      </div>

      <div>
        <h6 className="font-semibold text-xl pt-16 mb-2">Roles to Consider</h6>
        {otherRoles.map((role, index) => (
          <React.Fragment key={`${role.role}-${index}`}>
            <div className="flex justify-between items-center border rounded border-green-blue p-4 mt-4">
              <div className="flex justify-start items-center">
                <p className="text-xl pe-4 md:pe-8">{role.role}</p>
                <p>{role.percentage}% skills match</p>
              </div>
              <button
                className="text-midnight-moss"
                onClick={() => toggleAccordion(index)}
                aria-label={
                  accordionStates[index]
                    ? `Collapse ${role.role} details`
                    : `Expand ${role.role} details`
                }
              >
                {accordionStates[index] ? (
                  <ChevronUpIcon className="w-6 h-6" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6" />
                )}
              </button>
            </div>
            {accordionStates[index] && (
              <>
                <div
                  key={`${role.role}-${index}`}
                  className="flex flex-col md:flex-row items-start mt-8 pb-10 md:pt-0 md:pb-0"
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
                <div className="flex flex-col md:items-start justify-center pt-3 pb-10 md:pt-0 md:pb-0 md:mt-10">
                  <p className="font-semibold text-xl mt-4">
                    Grow Into a {role.role}
                  </p>
                  {otherRolesUnselectedSkills[index] && (
                    <div className="flex justify-center">
                      <ul className="md:flex flex-wrap">
                        {otherRolesUnselectedSkills[index].map(
                          (skill, index) => (
                            <li
                              key={`${skill.name}-${index}`}
                              className="text-start w-full md:w-auto md:pe-3 py-2"
                            >
                              <a
                                role="button"
                                href={`/knowledge-hub/${encodeURIComponent(
                                  skill.name
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-between items-center rounded-md shadow-lg hover:bg-oasis-blue shadow-md font-semibold text-midnight-moss bg-tropical-cyan w-72 md:w-full py-1.5 px-4"
                                aria-label={`Learn more about ${skill.name} in the knowledge hub`}
                              >
                                <span className="truncate pe-2">
                                  {skill.name}
                                </span>
                                <ArrowRightIcon className="h-5 w-5 text-midnight-moss" />
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                  {otherRolesMatchingSkills[index] && (
                    <div className="flex flex-col md:items-start justify-center pt-3 pb-10 md:pt-0 md:pb-0 md:mt-10">
                      <p className="font-semibold text-xl mt-4">
                        Your Current Matching Skills
                      </p>
                      <div className="flex justify-center">
                        <ul className="md:flex flex-wrap">
                          {otherRolesMatchingSkills[index].map(
                            (skill, index) => (
                              <li
                                key={`${skill.name}-${index}`}
                                className="text-start w-full md:w-auto md:pe-3 py-2"
                              >
                                <a
                                  role="button"
                                  href={`/knowledge-hub/${encodeURIComponent(
                                    skill.name
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex justify-center items-center rounded-md shadow-lg hover:bg-oasis-blue shadow-md font-medium text-midnight-moss bg-lightest-cyan border border-tropical-cyan w-72 md:w-full py-1.5 px-4"
                                  aria-label={`Learn more about ${skill.name} in the knowledge hub`}
                                >
                                  <span className="flex items-center justify-start w-4 h-4">
                                    <CheckIcon className="h-5 w-5 text-midnight-moss" />
                                  </span>
                                  <span className="truncate ps-2">
                                    {skill.name}
                                  </span>
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </>
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
