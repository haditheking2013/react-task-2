import React from "react";
import "./style.css";
import MedicalTreatmentList from "./MedicalTreatmentList";

export default function App() {

  const hadiData = '[{"treatmentId": 7, "treatmentCourseId": 304, "type": "physiotherapy", "category": "eyes", "name": "Hadi", "startDate": "20-06-2021"},'+ '{"treatmentId": 47, "treatmentCourseId": 504, "type": "pimples", "category": "skin", "name": "Maria", "startDate": "20-08-2021"},' + '{"treatmentId": 53, "treatmentCourseId": 104, "type": "acne", "category": "skin", "name": "Ahmad", "startDate": "05-03-2021"},'+'{"treatmentId": 3, "treatmentCourseId": 94, "type": "physiotherapy", "category": "eyes", "name": "Alex", "startDate": "09-01-2021"},'+'{"treatmentId": 1, "treatmentCourseId": 32, "type": "physiotherapy", "category": "heart", "name": "Moh", "startDate": "29-03-2001"}]' ;

  
  return (
    <div>
<img src="https://upload.wikimedia.org/wikipedia/en/e/ed/NHS_England_logo.svg"/>
      <MedicalTreatmentList jsonProp={hadiData}/> 

    </div>
  );
}

export default App;
