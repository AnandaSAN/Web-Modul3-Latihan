import React from "react";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate()
    return(
        <>
        <h4>Navbar</h4>
        <ul>
            <li><button onClick={()=> navigate ('/')}>Home</button></li>
            <li><button onClick={()=> navigate ('/contact')}>Contact</button></li>
            <li><button onClick={()=> navigate ('/about')}>About Us</button></li>
        </ul>
        </>
    )
}

export default Navbar