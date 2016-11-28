import React from 'react';
// import NotFound from './NotFound';
import Home from './Home';
// import LessonRead from './LessonRead';
// import LessonWrite from './LessonWrite';
// import Category from './Category';
// import Profile from './Profile';
// import Auth from './Auth';
import { Match, Miss } from 'react-router';



export default class Main extends React.Component {

  render() {
    return (
    <div className="container">
        <div className="row">
        <Match pattern="/" exactly render={
          () => <Home
            lessons={this.props.lessons}
            getLessons={this.props.getLessons}/>
        }/>
        </div>
    </div>
  )
  }



}
