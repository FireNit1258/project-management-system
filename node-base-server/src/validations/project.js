const Joi = require('joi');

const projectBasicFormValidation = Joi.object({
    project_name: Joi.string().required().messages({
      'string.empty': 'Project title is a required field.',
    }),
    category_id: Joi.number().required().messages({
      'number.empty': 'Project category is a required field.',
    }),
    project_short_description: Joi.string().min(100).max(300).required().messages({
      'string.empty': 'Project short description is a required field.',
      'string.min': 'Project short description should have at least 100 characters.',
      'string.max': 'Project short description should have at most 300 characters.',
    }),
    project_technology: Joi.string().required().messages({
      'string.empty': 'Project Technology is a required field.',
    }),
    completed_duration: Joi.string().required().messages({
      'string.empty': 'Completed duration is a required field.',
    }),
    display_order: Joi.number().required().messages({
      'number.base': 'Display order must be a number eg: 1,2..55',
      'number.empty': 'Display order is a required field.',
    }),
    project_description: Joi.string().min(100).max(5000).required().messages({
      'string.empty': 'Project description is a required field.',
      'string.min': 'Project description should have at least 100 characters.',
      'string.max': 'Project description should have at most 5000 characters.',
    })
  
  });

  const projectAdvanceFormValidation = Joi.object({
    meta_title: Joi.string().required().messages({
      'string.empty': 'Project meta title is a required field.',
    }),
    meta_keywords: Joi.string().required().messages({
      'string.empty': 'Project meta keywords is a required field.',
    }),
    project_slug: Joi.string().required().messages({
      'string.empty': 'Project slug is a required field.',
    })
  
  });

module.exports = {
    projectBasicFormValidation,projectAdvanceFormValidation
};