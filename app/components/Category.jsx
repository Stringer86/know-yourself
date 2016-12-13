import React from 'react';
import CategoryLessonCard from './CategoryLessonCard';
import axios from 'axios';
import { Link } from 'react-router';



export default class Category extends React.Component {

  componentDidMount() {
    function getLess() {
      return axios.get('/api/lessons')
    }
    function getFavs() {
      return axios.get('/api/favorites')
    }

    axios.all([getLess(), getFavs()])
      .then(axios.spread((lessons, favs) => {
        this.props.getLessons(lessons.data)
        this.props.getFavorites(favs.data)
      }))
      .catch(err => {
        return err;
      });
  }

  render() {
    const category = location.pathname.slice(10);

    if(this.props.lessons.length === 0) {
      return false;
    }

    const lessons = this.props.lessons;

    const filteredLessons = lessons.filter((e) => {
      if (e.category === category) {
        return e;
      }
    });

    let categoryLessons= filteredLessons.map((lesson, index) => {
        let favorited;

        this.props.favorites.forEach((favorite) => {
          if (lesson.id === favorite.lessonId) {
            lesson.favorited = true;
          } else {
            lesson.favorited = false;
          }
        })
      return <CategoryLessonCard data={lesson}
                         key={index}
                         favorited={this.props.favorited}
                         isLoggedIn={this.props.isLoggedIn}
            />
    });

    return (
      <div className="container">
        { filteredLessons.length > 0 && categoryLessons }

        { filteredLessons.length < 1 &&
          <div className="row center-align nothingFound">
            <h1>Nothing written on this subject</h1>
            <button id="action-button"><Link to="/write-lesson">Write a lesson</Link></button>
          </div>
        }
      </div>
    );
  }
}
