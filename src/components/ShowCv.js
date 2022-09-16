import React, { Component } from "react";
import '../styles/showCv.css';

class ShowCv extends Component {

  render(){
    const { generalInfo, educationInfo, practicalExp }  = this.props;
    return (
      <div id="cv-display" className="cv-display">
          <div className="top-display">
            <div className="name-surname-display">
                <div className="name-display">{generalInfo.firstName}</div>
                <div className="surname-display">{generalInfo.lastName}</div>
            </div>
            
            <div className="title-display">{generalInfo.title}</div>
          </div>
          
          <div className="mid-content-display">
            <div className="mid-left-display">
              <div className="description-display first-display">
                  <div className="explanation-display">Description</div>
                  <div>{generalInfo.description}</div>
              </div>
              <div className="education-display first-display">
                  <div className="explanation-display">Education</div>
                  <div className="education-answer-display">
                    <div>
                      <div>{educationInfo.from}</div>
                      <div>-</div>
                      <div>{educationInfo.to}</div>
                    </div>
                    <div className="university-city-display">
                        <div>
                          <div>{educationInfo.universityName},</div>
                          <div>{educationInfo.city}</div>
                        </div>
                        <div>
                          Degree: {educationInfo.degree}
                        </div>
                        <div>Subject: {educationInfo.subject} </div>
                    </div>
                  </div>
              </div>
              <div className="experience-display first-display">
                  <div className="explanation-display ">Experience</div>
                  <div className="experience-answer-display">
                    <div>
                      <div>{practicalExp.from}</div>
                      <div>-</div>
                      <div>{practicalExp.to}</div>
                    </div>
                    <div className="experience-position-display">
                        <div>
                          <div>{practicalExp.position},</div>
                        </div>
                        <div>
                          Company: {practicalExp.company}
                        </div>
                       
                    </div>
                  </div>
              </div>
            </div>
            
            <div className="mid-right-display">
                <div >Personal Details</div>
                <div className="address-display second-display">
                  <div>Address: </div>
                  <div>{generalInfo.address}</div>
                </div>
                <div className="phone-number-display second-display">
                  <div>Phone Number: </div>
                  <div>{generalInfo.phoneNumber}</div>
                </div>
                <div className="email-display second-display">
                  <div>Email: </div>
                  <div>{generalInfo.eMail}</div>
                </div>
            </div>
          </div>
          
        </div>
    );
  }
}

export default ShowCv;