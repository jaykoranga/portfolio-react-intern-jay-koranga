type headerprops={
     sections:string[],
      activeSection: string,
      setactiveSection: React.Dispatch<React.SetStateAction<string>>
}




const Header = ({sections,activeSection,setactiveSection}:headerprops,) => {
    interface navElement{
        name:string,
        link:string,
    }

    const moveTo=(id:string)=>{
    if(id!==""){
      console.log("click working")
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      // setactiveSection(id);
    }
}
    
    const navElements:navElement[]=[
        {name:"Home",link:sections[0]},
        {name:"About",link:sections[1]},
        {name:"Skills",link:sections[2]},
        {name:"Projects",link:sections[3]},
    ]
  return (
    <>
    <></>
    <header className=" sticky top-0 z-50 bg-black font-bold text-white">
        <nav className=" md:flex md:gap-6 font-bold p-2 md:justify-center md:items-center">
            <div className="flex justify-center text-3xl md:text-5xl md:w-1/3 md:text-center"><div style={{cursor:"pointer"}} onClick={()=>{moveTo(navElements[0].link)}} >Portfolio</div></div>
            <div className=" hidden md:flex w-2/3 gap-6 text-2xl  items-center justify-center  ">
              {
                navElements.map((el:navElement)=>{
                 
                  return (<p className={el.link === activeSection?"nav-item active" : "nav-item"} style={{cursor:"pointer"}} onClick={()=>{
                    moveTo(el.link)}} key={`${el.name}`}> {el.name} </p>)
                })
              }
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header
