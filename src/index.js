import '../src/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main/main.js';

class Index extends React.Component{
  render(){
    return(
      <div>
        <Main />
      </div>
    )
  }
}

ReactDOM.render(<Index />,document.getElementById("app"));
