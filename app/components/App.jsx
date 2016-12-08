import { BrowserRouter } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React from 'react';
import axios from 'axios';
import { Match, Miss } from 'react-router';
import Notifications, {notify} from 'react-notify-toast';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      lessons: [],
      lesson: [],
      myLessons: [],
      incompleteLessons: [],
      wishes: [],
      userData: [],
      favorites: [],
      wishItem: [],
      publishedArticle: []
    }
  }

  componentDidMount() {
    axios.get('/api/token')
      .then(res => {
        this.setState({ isLoggedIn: res.data });
      })
      .catch(err => {
        this.setState({ loadErr: err });
      });
  }

  getLessons(lessons) {
    this.setState({ lessons: lessons });
  }

  getLesson(lesson) {
    this.setState({ lesson: lesson })
  }

  getUserData(userData) {
    this.setState({ userData: userData });
  }

  getMyLessons(myLessons) {
    this.setState({ myLessons: myLessons})
  }

  getIncompleteLessons(incompleteLessons) {
    this.setState({ incompleteLessons: incompleteLessons})
  }

  getWishList(wishes) {
    this.setState({ wishes: wishes })
  }

  getFavorites(favorites) {
    this.setState({ favorites: favorites })
  }

  authUser(bool) {
    this.setState({ isLoggedIn: bool });

    window.location.href = '/';

    notify.show('You are now signed up!', 'success');
  }

  getWish(wishItem) {
    this.setState({ wishItem: wishItem });
  }

  upVote(votedWish) {
    const nextWishes = this.state.wishes.map((wish) => {
      if (votedWish !== wish) {
        return wish;
      }

      const nextUpvotes = votedWish.upvotes + 1;

      const nextWish = Object.assign({}, votedWish, { upvotes: nextUpvotes });

      return nextWish;
    });

    this.setState({ wishes: nextWishes })
  }

  downVote(votedWish) {
    const nextWishes = this.state.wishes.map((wish) => {
      if (votedWish !== wish) {
        return wish;
      }

      const nextUpvotes = votedWish.upvotes - 1;

      const nextWish = Object.assign({}, votedWish, { upvotes: nextUpvotes });

      return nextWish;
    });

    this.setState({ wishes: nextWishes });
  }

  getPublished(article) {
    this.setState({publishedArticle: article });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Notifications />
          <Header
              isLoggedIn={this.state.isLoggedIn}
              authUser={this.authUser.bind(this)}
              />
          <main>
            <Main
              { ...this.state }
              authUser={this.authUser.bind(this)}
              getPublished={this.getPublished.bind(this)}
              upVote={this.upVote.bind(this)}
              downVote={this.downVote.bind(this)}
              authUser={this.authUser.bind(this)}
              getUserData={this.getUserData.bind(this)}
              getLessons={this.getLessons.bind(this)}
              getWishList={this.getWishList.bind(this)}
              getFavorites={this.getFavorites.bind(this)}
              getMyLessons={this.getMyLessons.bind(this)}
              getIncompleteLessons={this.getIncompleteLessons.bind(this)}
              getWish={this.getWish.bind(this)}
              getLesson={this.getLesson.bind(this)}
            />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
};
