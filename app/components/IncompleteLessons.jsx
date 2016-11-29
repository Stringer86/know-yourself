import React from 'react';
import axios from 'axios';
import LessonCard from './LessonCard';


export default class IncompleteLessons extends React.Component {
  componentDidMount() {
      axios.get('/api/user')
        .then(res => {
          this.props.getIncompleteLessons(res.data).bind(this);
        })
        .catch(err => {
        console.log(err);
      });
    }

  render() {

    if(this.props.incompleteLessons.length === 0) {
      return <div></div>
    }

    const myIncompleteLessons = this.props.incompleteLessons.filter((e) => {
      if (e.published === false) {
        return e;
      }
    }).map((lesson, index) => {
      return <LessonCard data={lesson}
                         key={index}
            />
    })

    return (
          <div>
              { myIncompleteLessons }
          </div>
    );
  }
}
