import '../src/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App.js';

class Index extends React.Component{
  render(){
    return(
      <div>
        <h1>Hi</h1>
        <App />
      </div>
    )
  }
}

ReactDOM.render(<Index />,document.getElementById("app"));
