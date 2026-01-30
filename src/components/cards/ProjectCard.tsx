import { Button } from "../ui/button"

interface ProjectCardProps {
  name: string
  imgUrl: string
  projectlink: string
}

const ProjectCard = ({ name, imgUrl, projectlink }: ProjectCardProps) => {
  const goToProject = () => {
    if (!projectlink) return
    window.open(projectlink, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className="
        flex flex-col 
        items-center 
        gap-4
        p-6
        rounded-xl
        bg-white
        shadow-sm
        border
        transition-all
        duration-300
        hover:shadow-lg
        hover:-translate-y-1
        select-none
      "
    >
      
      <div className="w-40 h-40 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
        <img
          src={imgUrl}
          alt={`${name} project`}
          className="w-full h-full object-contain"
        />
      </div>

     
      <h3 className="text-xl font-semibold text-gray-800 text-center">
        {name}
      </h3>

     
      <Button
        size="sm"
        onClick={goToProject}
        className="mt-2"
      >
        Visit Project
      </Button>
    </div>
  )
}

export default ProjectCard
