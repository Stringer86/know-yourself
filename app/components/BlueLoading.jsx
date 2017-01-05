import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';


export default class Loading extends React.Component {

  render() {
    return (
        <div className="row loading">
          <h1>Give it a second, it's going to space</h1>
          <img src="./img/blueloading.gif"></img>
        </div>
    );
  }
}
