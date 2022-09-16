import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import ExpInfo from "./ExpInfo";

class SetInput extends Component {

  render(){
    const {setGeneralInfo, setExperienceInfo, setEducationInfo, educationInfo, practicalExp, generalInfo } = this.props;
    
    return (
        <div id="input-field">
          <GeneralInfo setGeneralInfo={setGeneralInfo} generalInfo = {generalInfo}/>
          <EducationInfo setEducationInfo = {setEducationInfo} educationInfo = {educationInfo} />
          <ExpInfo setExperienceInfo = {setExperienceInfo} practicalExp = {practicalExp} />
        </div>
    );
  }
}

export default SetInput;