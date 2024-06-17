import PropTypes from "prop-types";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  headerSection: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    textAlign: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    paddingBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333333",
  },
  subHeaderSection: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: "#667085",
  },
  skillTable: {
    marginTop: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#C7E7E4",
  },
  tableHeader: {
    backgroundColor: "#C7E7E4",
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: "#C7E7E4",
    color: "#000000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    alignItems: "center",
  },
  tableCell: {
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 7,
    textAlign: "left",
    flexGrow: 1,
    color: "#000000",
  },
  divider: {
    borderRightWidth: 1,
    borderRightColor: "#CCCCCC",
  },
  congratulations: {
    marginBottom: 10,
  },
});

const MyDocument = ({
  recommendedRole,
  matchPercentage,
  unselectedSkills,
  matchingSkills,
  otherRoles,
  recommendedRoleShortDescription,
  otherRolesUnselectedSkills,
  otherRolesMatchingSkills,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>TechGarden</Text>
      </View>
      <View style={styles.section}>
        {/* Case 1: Recommended role, not 100% match */}
        {recommendedRole && matchPercentage < 100 && (
          <View style={styles.section}>
            <Text style={styles.header}>Career Recommendations</Text>
            <Text style={styles.subHeader}>Congratulations!</Text>
            <Text style={styles.text}>
              You are just a few skills away from becoming a
            </Text>
            <Text style={styles.subHeader}>
              {recommendedRole} - {recommendedRoleShortDescription}
            </Text>
            <Text style={styles.text}>
              Your current skills match {matchPercentage}% of the top skills
              required in this position.
            </Text>

            <View style={styles.skillTable}>
              <View style={styles.tableRow}>
                <Text style={[styles.tableHeader, { width: "50%" }]}>
                  Skills to Improve
                </Text>
                <Text style={[styles.tableHeader, { width: "50%" }]}>
                  Current Matching Skills
                </Text>
              </View>
              {renderSkillsTable(unselectedSkills, matchingSkills)}
            </View>
          </View>
        )}

        {/* Case 2: Recommended role, 100% match */}
        {recommendedRole && matchPercentage === 100 && (
          <View style={styles.section}>
            <Text style={styles.header}>Career Recommendations</Text>
            <Text style={styles.subHeader}>Congratulations!</Text>
            <Text style={styles.text}>
              Your current skills match 100% of the top skills required for the{" "}
              {recommendedRole} role.
            </Text>
            <Text style={styles.subHeader}>
              {recommendedRole} - {recommendedRoleShortDescription}
            </Text>

            <View style={styles.skillTable}>
              <View style={styles.tableRow}>
                <Text style={[styles.tableHeader, { width: "100%" }]}>
                  Current Matching Skills
                </Text>
              </View>
              {matchingSkills.map((skill, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={[styles.tableCell, { width: "100%" }]}>
                    {skill.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Case 4: No recommended role, skills below 50% */}
        {!recommendedRole && matchPercentage < 50 && (
          <View
            style={[styles.section, styles.subHeader, styles.subHeaderSection]}
          >
            <Text>
              Congrats, your garden has the potential for multiple roles. Dive
              into each opportunity and discover where your unique talents truly
              thrive.
            </Text>
          </View>
        )}

        {/* Case 3: Other roles to consider */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Other Roles to Consider:</Text>
          {otherRoles.map((role, index) => (
            <View key={role.role} style={styles.section}>
              <Text style={styles.subHeader}>{role.role}</Text>
              <Text style={styles.text}>
                Match Percentage: {role.percentage}%
              </Text>
              <View style={styles.skillTable}>
                {role.percentage < 100 ? (
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableHeader, { width: "50%" }]}>
                      Skills to Improve
                    </Text>
                    <Text style={[styles.tableHeader, { width: "50%" }]}>
                      Current Matching Skills
                    </Text>
                  </View>
                ) : (
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableHeader, { width: "100%" }]}>
                      Current Matching Skills
                    </Text>
                  </View>
                )}

                {role.percentage < 100 ? (
                  renderSkillsTable(
                    otherRolesUnselectedSkills[index],
                    otherRolesMatchingSkills[index]
                  )
                ) : (
                  <>
                    {otherRolesMatchingSkills[index].map((skill, idx) => (
                      <View key={idx} style={styles.tableRow}>
                        <Text style={[styles.tableCell, { width: "100%" }]}>
                          {skill.name}
                        </Text>
                      </View>
                    ))}
                  </>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

// render skills as a table with separated columns
const renderSkillsTable = (unselectedSkills, matchingSkills) => {
  const maxLength = Math.max(unselectedSkills.length, matchingSkills.length);

  const rows = [];

  for (let i = 0; i < maxLength; i++) {
    const unselectedSkill = unselectedSkills[i]?.name || "";
    const matchingSkill = matchingSkills[i]?.name || "";

    rows.push(
      <View key={i} style={styles.tableRow}>
        <Text style={[styles.tableCell, { width: "50%" }]}>
          {unselectedSkill}
        </Text>
        <Text style={[styles.tableCell, { width: "50%" }]}>
          {matchingSkill}
        </Text>
      </View>
    );
  }

  return rows;
};

MyDocument.propTypes = {
  recommendedRole: PropTypes.string,
  matchPercentage: PropTypes.number.isRequired,
  unselectedSkills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  matchingSkills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  recommendedRoleShortDescription: PropTypes.string,
  otherRoles: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  otherRolesUnselectedSkills: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
  otherRolesMatchingSkills: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
};

export default MyDocument;
