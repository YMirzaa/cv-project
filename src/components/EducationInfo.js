import React, { Component } from "react";

class EducationInfo extends Component {

  render(){
    const {setEducationInfo, educationInfo} = this.props;
    return (
        <div>
            <h3>Education Information</h3>
            <form>
                <input onChange={setEducationInfo} value={educationInfo.universityName} type="text" id="universityName" placeholder="University Name" />   
                <input onChange={setEducationInfo} value={educationInfo.city} type="text" id="city" placeholder="City" />
                <input onChange={setEducationInfo} value={educationInfo.degree} type="text" id="degree" placeholder="Degree" />
                <input onChange={setEducationInfo} value={educationInfo.subject} type="text" id="subject" placeholder="Subject" />
                <input onChange={setEducationInfo} value={educationInfo.from} type="text" id="from" placeholder="From" />
                <input onChange={setEducationInfo} value={educationInfo.to} type="text" id="to" placeholder="To" />

                <button type="button" class="delete-btn">Delete</button>
                <button type="button" class="add-btn">Add</button>
            </form>
        </div>
    );
  }
}

export default EducationInfo;