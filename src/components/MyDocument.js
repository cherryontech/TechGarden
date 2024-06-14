import PropTypes from "prop-types";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  headerSection: {
    marginBottom: 20,
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
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: "#666666",
  },
  skillTable: {
    marginTop: 10,
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
    minHeight: 30,
    alignItems: "center",
  },
  tableCell: {
    fontSize: 12,
    paddingHorizontal: 12,
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
  otherRolesDescriptions,
  otherRolesUnselectedSkills,
  otherRolesMatchingSkills,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>TechGarden</Text>
      </View>
      <View style={styles.section}>
        {matchPercentage === 0 ? (
          <View style={[styles.section, styles.congratulations]}>
            <Text>
              Your garden has the potential for multiple roles. Explore each
              opportunity to discover where your unique talents truly shine.
            </Text>
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.header}>Career Recommendations</Text>
            <Text style={styles.subHeader}>Congratulations!</Text>
            <Text style={styles.text}>
              You are just a few skills away from becoming a
            </Text>
            <Text style={styles.subHeader}>{recommendedRole}</Text>
            <Text style={styles.text}>
              Your current skills match {matchPercentage}% of the top skills
              required in this position.
            </Text>
            <Text style={styles.text}>
              As a {recommendedRole}, you&apos;ll be the creative wizard
              ensuring that using an app feels as good as it looks.
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

        <View style={styles.section}>
          <Text style={styles.subHeader}>Other Roles to Consider:</Text>
          {otherRoles.map((role, index) => (
            <View key={role.role} style={styles.section}>
              <Text style={styles.subHeader}>{role.role}</Text>
              <Text style={styles.text}>
                Match Percentage: {role.percentage}%
              </Text>
              <Text style={styles.text}>{otherRolesDescriptions[index]}</Text>

              <View style={styles.skillTable}>
                <View style={styles.tableRow}>
                  <Text style={[styles.tableHeader, { width: "50%" }]}>
                    Skills to Improve
                  </Text>
                  <Text style={[styles.tableHeader, { width: "50%" }]}>
                    Current Matching Skills
                  </Text>
                </View>
                {renderSkillsTable(
                  otherRolesUnselectedSkills[index],
                  otherRolesMatchingSkills[index]
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
const renderSkillsTable = (unselectedSkills, matchingSkills) => (
  <>
    {unselectedSkills.map((skill, index) => (
      <View key={index} style={styles.tableRow}>
        <Text style={[styles.tableCell, { width: "50%" }]}>{skill.name}</Text>
        <View style={styles.divider} />
        <Text style={[styles.tableCell, { width: "50%" }]}>
          {matchingSkills[index]?.name}
        </Text>
      </View>
    ))}
  </>
);

MyDocument.propTypes = {
  recommendedRole: PropTypes.string.isRequired,
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
  otherRoles: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  otherRolesDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
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
