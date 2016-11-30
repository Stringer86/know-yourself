import React from 'react';
import LessonCard from './LessonCard';
import axios from 'axios';


export default class Feed extends React.Component {

  componentDidMount() {
    axios.get('/api/lessons')
      .then(res => {
        this.props.getLessons(res.data).bind(this);
      })
      .catch(err => {
        return err;
      });
  }

  render() {
    const lessonList = this.props.lessons.map((lesson, index) => {
      return <LessonCard data={lesson}
                         key={index}
                         id={lesson.id}
      />
    });


    return (
      <div className="row">
        { lessonList }
      </div>
    )
  }

}
