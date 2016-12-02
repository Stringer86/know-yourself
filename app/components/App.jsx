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
    console.log(userData);
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
    this.setState({ isLoggedIn: bool});
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
    console.log(this.state.publishedArticle);
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
            publishedArticle={this.state.publishedArticle}
            getPublished={this.getPublished.bind(this)}
            upVote={this.upVote.bind(this)}
            downVote={this.downVote.bind(this)}
            authUser={this.authUser.bind(this)}
            userData={this.state.userData}
            getUserData={this.getUserData.bind(this)}
            lessons={this.state.lessons}
            getLessons={this.getLessons.bind(this)}
            isLoggedIn={this.state.isLoggedIn}
            wishes={this.state.wishes}
            getWishList={this.getWishList.bind(this)}
            favorites={this.state.favorites}
            getFavorites={this.getFavorites.bind(this)}
            myLessons={this.state.myLessons}
            getMyLessons={this.getMyLessons.bind(this)}
            incompleteLessons={this.state.incompleteLessons}
            getIncompleteLessons={this.getIncompleteLessons.bind(this)}
            getWish={this.getWish.bind(this)}
            wishItem={this.state.wishItem}
            lesson={this.state.lesson}
            getLesson={this.getLesson.bind(this)}
          />
        </main>
        <Footer />
      </div>
      </BrowserRouter>
    )
  }
};
