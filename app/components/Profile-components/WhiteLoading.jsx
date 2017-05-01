import React from 'react';
import LazyLoad from 'react-lazyload';


const WhiteLoading = () => {
    return (
        <div className="row">
          <h1>Just a second...</h1>
          <img src="./img/whiteloading.gif"></img>
        </div>
    );
}

module.exports = WhiteLoading;
