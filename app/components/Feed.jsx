import React from 'react';
import LessonCard from 'LessonCard';

export default class Feed extends React.Component {

  componentDidMount() {
    axios.get('/api/lessons')
      .then(res => {
        this.props.getLessons(res.data);
      })
      .catch(err => {
        this.props.getLessons(res.data);
      });
  }

  render() {

    const lessonList = this.props.lessons.map((lesson, index => {
      return <LessonCard data={lesson}
      />
    })
    return (
      <div className="row">
        { lessonList }
      </div>
    )
  }

}
>>>>>>> articles_component
