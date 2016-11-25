'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    question: Joi.string()
      .label('question')
      .required()
      .trim(),

    category: Joi.string()
      .label('category')
      .required()
      .trim()
  }
};
