import React from 'react';
import axios from 'axios';
import LessonCard from './LessonCard';

export default class PublicLessons extends React.Component {

  componentDidMount() {
    const id = Number(location.pathname.slice(6, 7));

    function getLessons() {
      return axios.get(`/api/user/${id}`)
    }

    function getFavs() {
      return axios.get('/api/favorites')
    }

    axios.all([getLessons(), getFavs()])
      .then(axios.spread((lessons, favs) => {
        this.props.getMyLessons(lessons.data)
        this.props.getFavorites(favs.data)
      }))
      .catch(err => {
        return err;
      });
  }

  render() {
    if(this.props.myLessons.length === 0) {
      return false;
    }

    const myLessons = this.props.myLessons.filter((e) => {
      if (e.published === true) {
        return e;
      }
    }).map((lesson, index) => {
      return <LessonCard data={lesson}
                         key={index}
                         myLessons={this.props.myLessons}
                         getMyLessons={this.props.getMyLessons}
                         favorites={this.props.favorites}
                         getFavorites={this.props.getFavorites}
              />
    });

    return (
      <div>
        { myLessons }
      </div>
    );
  }
}
