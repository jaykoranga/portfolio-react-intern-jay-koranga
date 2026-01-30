
interface skillCardProps{
    name:string,
    imgUrl:string,
    
}
const SkillCard = ({name,imgUrl}:skillCardProps) => {
  return (
    <div className="w-16 h-16 md:w-32 md:h-32 flex flex-col items-center m-2 p-3 gap-2">
      <img className="w-full h-full object-contain" src={imgUrl} alt="skill-image" />
      <span className="font-serif">{name}</span>
    </div>
  )
}

export default SkillCard
