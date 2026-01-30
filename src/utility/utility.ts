type ProfileData = {
  college: string
  CGPA: number
  company: string
  school: string
  favouriteSport: string
  favouriteAnime: string
  favouriteSubject:string
  bestProject:string
  
}

export const data: ProfileData = {
  college: "CGC Landran",
  CGPA: 8.5,
  favouriteSubject:"DSA",
  bestProject:"College attendance system",
 
  company: "Chicmic-Studios",
  school: "HPS kichha",
  favouriteSport: "Volleyball",
  favouriteAnime: "One-piece",

}
import htmlImg from '/html.png'
import cssImg from '/css.png'
import javascriptImg from '/javascript.png'
import reactImg from '/react.png'
import mongoDbImg from '/mongodb.png'
import mySqlImg from '/sql.png'
import cPlusImg from '/cplus.png'
import pythonImg from '/python.png'
import nodeJsImg from '/nodejs.png'
import gitImg from '/git.png'
import githubImg from '/github.png'
import publicSpeakingImg from '/public-speaking.png'
import managementImg from '/management.png'

interface skillDataType{
       name:string,
       link:string
}
export const skillData:skillDataType[]=[
    {name:"HTML",link:htmlImg},
    {name:"CSS",link:cssImg},
    {name:"JAVASCRIPT",link:javascriptImg},
    {name:"REACT JS",link:reactImg},
    {name:"MONGO DB",link:mongoDbImg},
    {name:"MY SQL",link:mySqlImg},
    {name:"C++",link:cPlusImg},
    {name:"PYTHON",link:pythonImg},
    {name:"NODE JS",link:nodeJsImg},
    {name:"GIT",link:gitImg},
    {name:"GITHUB",link:githubImg},
    {name:"PUBLIC SPEAKING",link:publicSpeakingImg},
    {name:"MANAGEMENT",link:managementImg}
]
import chatAppImg from '/chatApp.png'
import contactManagerImg from '/contact-manager.png'
import erpImg from '/erp.png'
import locationImg from '/location.png'
import snakeImg from '/snake.png'

interface projectDataType{
    name:string,
    imgUrl:string,
    projectLink:string
}
export const projectData:projectDataType[]=[
    {name:"Chat Application",imgUrl:chatAppImg,projectLink:"https://jason-chat-app-frontend.vercel.app/"},
    {name:"Contact Manager App",imgUrl:contactManagerImg,projectLink:"https://contact-manager-frontend-six.vercel.app/"},
    {name:"Pacman Game",imgUrl:locationImg,projectLink:"https://packman-game.vercel.app/"},
    {name:"Snake Game",imgUrl:snakeImg,projectLink:"https://github.com/jaykoranga/SnakeGame"},
    {name:"ERP CGC",imgUrl:erpImg,projectLink:"https://github.com/jaykoranga?tab=repositories"},
]