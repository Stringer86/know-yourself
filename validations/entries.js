'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    body: Joi.string()
      .label('body')
      .required()
      .trim(),

  }
};
