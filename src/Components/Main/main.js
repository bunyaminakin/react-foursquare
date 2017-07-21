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
                <Intro title="Lorem ipsum sit" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Search/>
            </div>
            <div>
                <Footer/>
            </div>
            </div>
        )
    }
}

export default Main;