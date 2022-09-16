import React, { Component } from "react";
import SetInput from "./SetInput";
import ShowCv from "./ShowCv";

import '../styles/content.css';

class MainContent extends Component {
    constructor() {
        super();
        
        this.state = {
            generalInfo : {
                firstName : '',
                lasstName : '',
                title : '',
                address : '',
                phoneNumber: '',
                eMail: '',
                description: '',
            }, 
            educationInfo : {
                universityName: '',
                city: '',
                degree: '',
                subject: '',
                from: '',
                to: '', 
            },

            practicalExp: {
                position: '',
                company: '',
                from: '',
                to: '',
            }
        };
    

        this.setGeneralInfo = this.setGeneralInfo.bind(this);
        this.setEducationInfo = this.setEducationInfo.bind(this);
        this.setExperienceInfo = this.setExperienceInfo.bind(this);
    }
    
    setGeneralInfo(event){
        this.setState({
            generalInfo : {
                ...this.state.generalInfo,
                [event.target.id] : event.target.value
            }
        });
    };

    setEducationInfo(event){
        this.setState({
            educationInfo : {
                ...this.state.educationInfo,
                [event.target.id] : event.target.value
            }
        });
    };

    setExperienceInfo(event){
        this.setState({
            practicalExp : {
                ...this.state.practicalExp,
                [event.target.id] : event.target.value
            }
        });
    };


    render(){
        const { generalInfo, educationInfo, practicalExp } = this.state;
        return (
            <div id="content">
                <SetInput setGeneralInfo = {this.setGeneralInfo} 
                        setExperienceInfo = {this.setExperienceInfo} 
                        setEducationInfo = {this.setEducationInfo}
                        educationInfo = {educationInfo}
                        practicalExp = {practicalExp}
                        generalInfo = {generalInfo}/>

                <ShowCv generalInfo = {generalInfo} educationInfo = {educationInfo} practicalExp= {practicalExp}  />
            </div>
        );
    }
}

export default MainContent;