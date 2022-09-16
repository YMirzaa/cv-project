import React, { Component } from "react";

class ExpInfo extends Component {

  render(){
    const {setExperienceInfo, practicalExp} = this.props;

    return (
        <div>
            <h3>Practical Experience</h3>
            <form>
                <input onChange={setExperienceInfo} value={practicalExp.position} type="text" id="position" placeholder="Position" />   
                <input onChange={setExperienceInfo} value={practicalExp.company} type="text" id="company" placeholder="Company" />
                <input onChange={setExperienceInfo} value={practicalExp.from} type="text" id="from" placeholder="From" />
                <input onChange={setExperienceInfo} value={practicalExp.to} type="text" id="to" placeholder="To" />

                <button type="button" class="delete-btn">Delete</button>
                <button type="button" class="add-btn">Add</button>
            </form>
        </div>
    );
  }
}

export default ExpInfo;