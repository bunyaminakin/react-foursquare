import './intro.scss';
import React, { Component } from 'react';

class Intro extends Component{
    render(){
        return(
            <div className="intro">
                <img className="logo" src={require('../../../img/logo.png')} />
                <h1 className="intro-big">{this.props.big}</h1>
                <p className="intro-small">{this.props.small}</p>
            </div>
        )
    }
}

export default Intro;