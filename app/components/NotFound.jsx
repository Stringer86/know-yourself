import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="row center-align">
        <h1>This route does not exist</h1>
        <iframe src="//giphy.com/embed/3o6Zt4bSnXhBBgKjNC" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/Originals-lost-idk-i-dont-know-3o6Zt4bSnXhBBgKjNC" target="_blank">via GIPHY</a></p>
      </div>
    );
  }
}
