import React from "react"; 
import MedicalTreatment from "./MedicalTreatment";

function MedicalTreatmentList(props){

const hadiChangeFields = props.jsonProp;
const hadiChangeThis = JSON.parse(hadiChangeFields);

const displayTreatment= hadiChangeThis.filter(treatment => treatment.category === "skin").map((treatment) => 
  
<div>
<MedicalTreatment 
treatmentId={treatment.treatmentId}
treatmentCourseId= {treatment.treatmentCourseId} 
type={treatment.type} 
category={treatment.category} 
name={treatment.name} 
startDate={treatment.startDate} />
</div>

);

return(
  <div>
  {displayTreatment}
  </div>
)


}

export default MedicalTreatmentList;