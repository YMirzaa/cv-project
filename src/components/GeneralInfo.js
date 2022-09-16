import React, { Component } from "react";

class GeneralInfo extends Component {

  render(){

    const {setGeneralInfo, generalInfo} = this.props;
    return (
        <div>
            <h3>General Information</h3>
            <form>
                <input onChange={setGeneralInfo} value={generalInfo.firstName} type="text" id="firstName" placeholder="First Name" />   
                <input onChange={setGeneralInfo} value={generalInfo.lastName} type="text" id="lastName" placeholder="Last Name" />
                <input onChange={setGeneralInfo} value={generalInfo.title} type="text" id="title" placeholder="Title" />
                <input onChange={setGeneralInfo} value={generalInfo.address} type="text" id="address" placeholder="Address" />
                <input onChange={setGeneralInfo} value={generalInfo.phoneNumber} type="text" id="phoneNumber" placeholder="Phone Number" />
                <input onChange={setGeneralInfo} value={generalInfo.eMail} type="mail" id="eMail" placeholder="E-mail" />
                <input onChange={setGeneralInfo} value={generalInfo.description} type="text" id="description" placeholder="Description" />
            </form>
        </div>
    );
  }
}

export default GeneralInfo;