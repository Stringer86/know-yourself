import React from 'react';
import LazyLoad from 'react-lazyload';


const BlueLoading = (props) => {
  if (props.loading) {
    return (
        <div className="row center-align loading">
          <h1>Give it a second, it's going to space</h1>
          <img src="./img/blueloading.gif"></img>
        </div>
    );
  } else {
    return null;
  }
}

module.exports = BlueLoading;
