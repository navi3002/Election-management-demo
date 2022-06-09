const Joi = require('joi');

const managecitizenschema = Joi.object({
  citizenname: Joi.string()
    .regex(/^[A-Za-z]/)
    .required(),

  citizenemail: Joi.string()
    .regex(/^([\w]*[\w\.]*(?!\.)@gmail.com)/)
    .required(),

  citizenadhaar: Joi.string()
    .max(12)
    .regex(/\d{4}\d{4}\d{4}/)
    .required(),

  dob: Joi.string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)
    .required(),

  phonenumber: Joi.string()
    .max(10)
    .regex(/((\\+91-?)|0)?\d{10}$/)
    .required(),

  boothid: Joi.optional(),

  boothno: Joi.optional(),

  citizenadress: Joi.optional(),

  citizencity: Joi.optional(),

  citizenstate: Joi.optional(),
});

module.exports = { managecitizenschema };
