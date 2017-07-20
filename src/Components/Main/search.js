import './search.scss';
import React, { Component } from 'react';

class Search extends Component{
    render(){
        return(
            <div className="search">
                <form>
                    <input type="text" id="search-bar-one" placeholder={this.props.barOne}/>
                    <input type="text" id="search-bar-two" placeholder={this.props.barTwo} />
                    <button style={{backgroundImage:'url(' + require('../../../img/shape.png') + ')',}}></button>
                </form>
            </div>
        )
    }
}

export default Search;