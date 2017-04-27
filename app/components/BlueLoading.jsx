import React from 'react';
import LazyLoad from 'react-lazyload';


const BlueLoading = () => {

    return (
        <div className="row loading">
          <h1>Give it a second, it's going to space</h1>
          <img src="./img/blueloading.gif"></img>
        </div>
    );
}

module.exports = BlueLoading;
