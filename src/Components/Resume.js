import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function(education){
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">By: <em className="date">{education.graduated}</em></p>
            <p>{education.description}</p>
          </div>
        );
      })
    }

    return (
      <section id="publications">
        <div className="row">
          <div className="three columns header-col">
            <h1><span>Publications</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
