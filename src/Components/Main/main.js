import React, { Component } from 'react';
import './main.scss';
import Intro from './intro.js';
import Search from './search.js';
import Footer from './footer.js';

class Main extends Component{
    render(){
        return(
            <div>
            <div className="main">
                <Intro big="Lorem ipsum sit" small="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Search barOne="I am looking for" barTwo="Istanbul"/>
            </div>
            <div>
                <Footer/>
            </div>
            </div>
        )
    }
}

export default Main;