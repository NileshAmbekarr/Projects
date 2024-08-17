import { FaRegCircle, FaPen, FaTimes } from "react-icons/fa";
function Icon({ name }){
    
    if(name == "circle"){
        return (
            <FaRegCircle size={30}/>
        )   
    }else if (name == "cross") {
        return(
            <FaTimes size={30}/>
        )
    }else{
        return (
            <FaPen size={30}/>
        )
    }
}

export default Icon;