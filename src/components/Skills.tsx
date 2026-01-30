import SkillCard from "./cards/SkillCard"
import { skillData } from "../utility/utility"
const Skills = () => {
  return (
    <div className="p-10">
      <div className="skill-heading flex justify-center text-5xl md:text-7xl font-serif text-4xl  mt-10 mb-40 mb:mb-10 ">Skills</div>
      <div className="contain-skills grid grid-cols-3 md:grid-cols-4 gap-6 w-full h-full place-items-center ">
         {
            skillData.map((skill,index)=>{
                return(
                    <SkillCard key={index} name={skill.name} imgUrl={skill.link}></SkillCard>
                )
            })
         }
      </div>
    </div>
  )
}

export default Skills
