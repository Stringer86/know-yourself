import React from 'react';
import NotFound from './NotFound';
import Home from './Home';
import Category from './Category';
import WriteLesson from './WriteLesson';
import WriteQuestion from './WriteQuestion';
import ReadLesson from './ReadLesson';
// import Category from './Category';
import Profile from './Profile';
import { Match, Miss, Link, Redirect} from 'react-router';
import SignUp from './SignUp';
import SignIn from './SignIn';
import LessonCard from './LessonCard';

export default class Main extends React.Component {

  render() {
    return (
      <div className="row">
        <Link to="/profile" style={{'marginTop': '65px', color: 'black'}}>bob</Link>
        <Match pattern="/" exactly render={
          () => <Home
            upVote={this.props.upVote}
            downVote={this.props.downVote}
            lessons={this.props.lessons}
            getLessons={this.props.getLessons}
            wishes={this.props.wishes}
            getWishList={this.props.getWishList}
            favorites={this.props.favorites}
            getFavorites={this.props.getFavorites}
          />
        }/>
        <Match pattern="/signup" exactly render={
          () => <SignUp
              />
        }/>
        <Match pattern="/signin" exactly render={() =>
          this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <SignIn authUser={this.props.authUser} />
          )
        }/>
        <Match pattern="/profile" render={
          () => this.props.isLoggedIn ? (
            <Profile
              userData={this.props.userData}
              getUserData={this.props.getUserData}
              favorites={this.props.favorites}
              getFavorites={this.props.getFavorites}
              myLessons={this.props.myLessons}
              getMyLessons={this.props.getMyLessons}
              incompleteLessons={this.props.incompleteLessons}
              getIncompleteLessons={this.props.getIncompleteLessons}
            />
          ) : (
            <Redirect to="/" />
          )
        }/>
        <Match pattern="/category" render={
          () => <Category
                lessons={this.props.lessons}
                getLessons={this.props.getLessons}
              />
        }/>
        <Match pattern="/write-lesson/:id?" render={
          () => <WriteLesson />
        }/>
        <Match pattern="/question" render={
          () => <WriteQuestion />
        }/>
        <Match pattern="/lesson/:id?" render={
          () => <ReadLesson
              lesson={this.props.lesson}
              getLesson={this.props.getLesson}
          />
        }/>
        <Miss component={NotFound} />
      </div>
    );
  }
}
