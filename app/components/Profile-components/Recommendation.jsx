import React from 'react';
import { Link } from 'react-router-dom';
import Donors from './Donors';
import Instructables from './Instructables';

const Recommendation = (props) => {
  const entry = props.entry;
  console.log("hello?");
  const arr = ['fear', 'anger', 'joy', 'sadness', 'disgust']

  const highest = arr.reduce((accum, curr, idx) => {
    if (accum === 'minimum') return curr;
    if (parseFloat(entry[accum]) <= parseFloat(entry[curr])) return curr;
    return accum
  }, 'minimum');

  if (highest === 'joy') {
    return <Donors />
  } else {
    return <Instructables />
  }
}

module.exports = Recommendation;
