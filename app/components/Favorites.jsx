import React from 'react';
import axios from 'axios';
import LessonCard from './LessonCard';
// import Lessons from './Lessons';
// import IncompleteLessons from './IncompleteLessons';
// import Favorites from './Favorites';

export default class Favorites extends React.Component {

  componentDidMount() {
      axios.get('/api/favorites')
        .then(res => {
          this.props.getFavorites(res.data).bind(this);
        })
        .catch(err => {
          console.log(err);
      })
    }

  render() {

    if(this.props.favorites.length === 0) {
      return <div></div>
    }

    const favorited = true;

    const myFavorites = this.props.favorites.map((favorite, index) => {
      return <LessonCard data={favorite}
                         key={index}
                         id={favorite.lessonId}
                         favorited={favorited}
                         />
    })

    return (
          <div>
              { myFavorites }
          </div>
    );
  }
}
