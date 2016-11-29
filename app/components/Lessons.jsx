import React from 'react';
import axios from 'axios';
import LessonCard from './LessonCard';
// import IncompleteLessons from './IncompleteLessons';
// import Favorites from './Favorites';

export default class Lessons extends React.Component {
  componentDidMount() {
      axios.get('/api/user')
        .then(res => {
          console.log(res.data);
          this.props.getMyLessons(res.data).bind(this);
        })
        .catch(err => {
        console.log(err);
      });
    }

  render() {

    if(this.props.myLessons.length === 0) {
      return <div></div>
    }

    const myLessons = this.props.myLessons.filter((e) => {
      if (e.published === true) {
        return e;
      }
    }).map((lesson, index) => {
      return <LessonCard data={lesson}
                         key={index}
            />
    })

    return (
          <div>
              { myLessons }
          </div>
    );
  }
}
