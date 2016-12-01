import React from 'react';
import LessonCard from './LessonCard';
import axios from 'axios';


export default class Feed extends React.Component {

  componentDidMount() {

    const feed = this;
    function getLess() {
      return axios.get('/api/lessons')
    }
    function getFavs() {
      return axios.get('/api/favorites')
    }

    axios.all([getLess(), getFavs()])
      .then(axios.spread(function (lessons, favs) {
        console.log(lessons.data);
        feed.props.getLessons(lessons.data)
        feed.props.getFavorites(favs.data)
      }))
      .catch((error) => {
        console.log(error);
      });

  }

  render() {
    if (this.props.lessons.length === 0) {
      return (
        <div></div>
      )
    }
    const lessonList = this.props.lessons.map((lesson, index) => {

      let favorited;

      this.props.favorites.forEach((favorite) => {
        if (lesson.id === favorite.lessonId) {
          favorited = true;
        }
        else {
          favorited = false;
        }
      })

      return <LessonCard data={lesson}
                         key={index}
                         id={lesson.id}
                         favorited={favorited}

      />
    });


    return (
      <div className="row">
        { lessonList }
      </div>
    )
  }

}
