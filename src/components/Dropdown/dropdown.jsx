import React, { useState, useEffect, useRef } from 'react'
import "./dropdown.css"

const Dropdown = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [selectedOption, setSelectedOption] = useState({id:null});
    const ref = useRef(null);
    
    // This useEffect will handle the case where the dropdown is open, but you click away
    useEffect(()=>{
        function handler(e){
            
            if(ref.current){
                if(!ref.current.contains(e.target)){
                    setIsSelected(false)
                };
            }
        }
        document.addEventListener('click', handler)

        return ()=> {
            document.removeEventListener('click', handler)
        }
    },[])

    // Represents the inital drop down options.
    const options = [
        {
            id: 1,
            label: "Skin Care & Rejuvenation"
        },
        {
            id: 2,
            label: "test"
        }
    ]


  return (
    <div className="dropdown" ref={ref}>
        <button className="toggle" 
            onClick={()=>{setIsSelected(!isSelected)}}>
            Treatments
        </button>
        <div className={`options ${isSelected ? 'visible' : ''}`}>
            {options.map((option, index)=> {
                return (
                <button 
                className={`${selectedOption.id === option.id ? "selected" : ""}`} // use this if u want, not needed really.
                onClick={()=>{
                    setSelectedOption(option)
                    setIsSelected(false)}}>
                    {option.label}
                    {/*/ Basically, you add another option here that displays another set of menus
                    Do simple css until you get the functionality working, 
                    router is setup so you can use <Link to="/treatment"><Link> to navigate to that page. */}
                </button>)
            })}
        </div>
    </div>
  )
}

export default Dropdown