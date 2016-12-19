'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    name: Joi.string()
      .label('name')
      .required()
      .trim(),

    email: Joi.string()
      .label('email')
      .required()
      .trim(),

    password: Joi.string()
      .label('password')
      .required()
      .min(8)
      .trim(),
  }
};
