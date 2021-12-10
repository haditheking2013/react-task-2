import React from "react";

function MedicalTreatment (props) {
  
  
    return(
    <div>
        <h2>Hadi GP NHS !</h2>


        <li> Treat ID  {props.treatmentId} </li> 
        <li> Treat Course ID {props.treatmentCourseId}</li> 
        <li> Type {props.type} </li> 
        <li>  Category: {props.category}  </li>
        <li>  Name: {props.name} </li> 
        <li>  Start Date: {props.startDate}
        </li>
    </div>
    )
    

  }


export default MedicalTreatment;


