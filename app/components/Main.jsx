import React from 'react';
// import NotFound from './NotFound';
import Home from './Home';
// import LessonRead from './LessonRead';
// import LessonWrite from './LessonWrite';
// import Category from './Category';
// import Profile from './Profile';
// import Auth from './Auth';


export default class Main extends React.Component {

  render() {
    <div className="container">
        <div className="row">
        <Match pattern="/" exactly render={
          () => <Home
            lessons={this.props.lessons}
            getLessons={this.props.getLessons}/>
        }/>
        </div>
    </div>
  }



}
