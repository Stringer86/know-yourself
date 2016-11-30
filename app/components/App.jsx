import { BrowserRouter } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React from 'react';
import axios from 'axios';
import { Match, Miss } from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      isLoggedIn: false,

      lessons: [],

      myLessons: [],

      incompleteLessons: [],

      wishes: [],

      userData: [],

      favorites: [],

      answering: true,

      wishItem: []
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
    this.setState({ isLoggedIn: bool});
  }

  getAnswering(bool) {
    this.setState({ answering: bool });
  }

  getWish(wishItem) {
    console.log(wishItem);
    this.setState({ wishItem: wishItem });
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Header
            isLoggedIn={this.state.isLoggedIn}
            authUser={this.authUser.bind(this)}
            />
        <main>
          <Main
            answering={this.state.answering}
            getAnswering={this.getAnswering.bind(this)}
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
          />
        </main>
        <Footer />
      </div>
      </BrowserRouter>
    )
  }
};
