import './footer.scss';
import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <a>About Us</a>
                <a>Contact</a>
                <a>Blog</a>
            </div>
        )
    }
}

export default Footer;