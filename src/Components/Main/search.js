import React, { Component } from 'react';
import './search.scss';

class Search extends Component{
    render(){
        return(
            <div className="search">
                <form>
                    <input type="text" className="query" placeholder="I am looking for" />
                    <input type="text" className="location" placeholder="Istanbul" />
                    <button style={{backgroundImage:'url(' + require('../../../img/shape.png') + ')',}}></button>
                </form>
            </div>
        )
    }
}

export default Search;