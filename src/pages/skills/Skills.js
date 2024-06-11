import { useParams } from "react-router-dom";
import skillData from "../../data/SkillData";
import SkillsTemplate from "../../components/SkillsTemplate";

function Skills() {
  const { skill } = useParams();
  const decodedSkillName = decodeURIComponent(skill);
  const skillDataItem = skillData
    .flatMap((category) => category.skills)
    .find((s) => s.name === decodedSkillName);

  if (!skillDataItem) {
    return <div>Skill not found</div>;
  }

  return (
    <div role="main">
      <SkillsTemplate skill={skillDataItem} />
    </div>
  );
}

export default Skills;
