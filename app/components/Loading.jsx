import React from 'react';
import LazyLoad from 'react-lazyload';


const Loading = () => {
    return (
        <div className="row loading">
          <h1>Give it a second, it's going to space</h1>
          <img src="./img/loading.gif"></img>
        </div>
    );
}

module.exports = Loading;
