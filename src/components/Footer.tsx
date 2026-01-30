interface footerPropsType{
    isModalActive:boolean,
    setIsModalActive:React.Dispatch<React.SetStateAction<boolean>>
}

const Footer = ({isModalActive,setIsModalActive}:footerPropsType) => {
    function contactClick(){
            if(!isModalActive){
                console.log("setting the show modal : true")
                setIsModalActive(true);
            }
            return;
    }
    return (
        <div className="mb-0 w-full h-30 text-grey-800 flex flex-col md:gap-y-5 gap-y-3 md:text-xl md:border-2 border-0 text-sm md:m-1 md:p-2">
             <div className="flex gap-5 md:gap-5 justify-center">

                <button style={{cursor:"pointer"}} className=" md:rounded-lg rounded-sm grid-col-span-1 bg-black text-white md:p-2 md:m-2 p-1 m-0" onClick={contactClick}>Contact Me</button>
                <button style={{cursor:"pointer"}} className=" md:rounded-lg rounded-sm grid-col-span-1 bg-black text-white md:p-2 md:m-2 p-1 m-0">Linkedin</button>
                <button style={{cursor:"pointer"}} className=" md:rounded-lg rounded-sm grid-col-span-1 bg-black text-white md:p-2 md:m-2 p-1 m-0">Instagram</button>
                <button style={{cursor:"pointer"}} className=" md:rounded-lg rounded-sm grid-col-span-1 bg-black text-white md:p-2 md:m-2 p-1 m-0">Github</button>
            </div> 
            
            
            <div className="text-center md:">

                <span className="md:p-2 md:m-2 m-0 p-0 ">ALL RIGHTS RESERVED @PORTFOLIO </span>
            </div>
           
        </div>
    )
}

export default Footer
