import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"

import htmlImg from '/html.png'
import cssImg from '/css.png'
import javascriptImg from '/javascript.png'
import { projectData } from "../utility/utility"
import ProjectCard from './cards/ProjectCard'

const Projects = () => {
    return (
        <div className="container md:mt-10 mt-0 md:p-10">
            <div className="heading text-5xl md:text-7xl font-serif text-center">Projects</div>
            <div className="maincontainer p-10">
                <Carousel >
                    <CarouselContent>
                        {
                            projectData.map((project)=>{
                                return(<CarouselItem key={project.name} className=" basis-1/1 md:basis-1/3"><ProjectCard name={project.name} imgUrl={project.imgUrl} projectlink={project.projectLink}></ProjectCard></CarouselItem>)
                            })
                        }
                    
                       
                        
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default Projects
