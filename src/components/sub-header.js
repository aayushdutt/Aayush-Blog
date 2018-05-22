import React, { Component } from 'react';


export default class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
BackgroundImage = require("../assets/" + this.props.imageFolder + "/" +  this.props.imageName);
  render() { 
    return (
      <header style={{backgroundImage: `url(${this.BackgroundImage})`}} className="masthead">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>{this.props.title}</h1><span id="indexSub" className="subheading">{this.props.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      )
  }
}