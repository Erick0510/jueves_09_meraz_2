import React from "react";
import cv from "./imagenes/curriculum.jpg";
import "../App.css";



function alumno() {
    return(
    <div>
        <img src={cv} alt="" className="cv"></img>
    </div>
    )

}

export default alumno;