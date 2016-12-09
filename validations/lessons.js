'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    title: Joi.string()
      .label('title')
      .required()
      .trim(),

    category: Joi.string()
      .label('category')
      .required()
      .trim(),

    description: Joi.string()
      .label('description')
      .required()
      .trim(),

    published: Joi.boolean()
      .label('published')
      .required(),

    body: Joi.string()
      .label('body')
      .required()
      .trim(),

  }
};
