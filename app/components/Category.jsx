import React from 'react';
import LessonCard from './LessonCard';
import axios from 'axios';
import { Link } from 'react-router';



export default class Category extends React.Component {


  componentWillMount() {

    axios.get('/api/lessons')
      .then(res => {
        this.props.getLessons(res.data).bind(this);
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {

    const category = location.pathname.slice(10);


    if(this.props.lessons.length === 0) {
      return <div>What's up</div>
    }
    const lessons = this.props.lessons;

    const filteredLessons = lessons.filter((e) => {
      if (e.category === category) {
        return e;
      }
    })

    console.log(filteredLessons.length);

    let categoryLessons= filteredLessons.map((lesson, index) => {
      return <LessonCard data={lesson}
                         key={index}
            />
    })

    return (
          <div className="container">
            {filteredLessons.length > 0 &&
              categoryLessons }

            {filteredLessons.length < 1 &&
              <div className="row center-align">
              <h1>Nothing written on this subject</h1>
              <button><Link to="/write-lesson">Write a lesson</Link></button>
              </div>
            }

          </div>
    );
  }

}
