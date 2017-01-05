import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';


export default class Loading extends React.Component {

  render() {
    return (
        <div className="row">
          <h1>Just a second...</h1>
          <img src="./img/whiteloading.gif"></img>
        </div>
    );
  }
}
