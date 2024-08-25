import Search from "../Search/Search";
import './Pockedex.css'
function Pockedex(){
    return (
       <div className="pockedex-wrapper">
            <h1 id="pockedex-heading">Pockedex</h1>
            <Search/>
       </div> 
    )
}

export default Pockedex;