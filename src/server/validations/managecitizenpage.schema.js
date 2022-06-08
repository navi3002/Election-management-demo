const Joi = require("joi");

const managecitizenschema = Joi.object({
  citizenname: Joi.string()
    .regex(/^[A-Za-z]*\d*[A-Za-z]/)
    .required(),

  citizenemail: Joi.string()
    .regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]/)
    .required(),

  citizenadhaar: Joi.string()
    .max(12)
    .regex(/\d{4}\d{4}\d{4}/)
    .required(),

  dob: Joi.string().required(),

  phonenumber: Joi.string()
    .max(10)
    .regex(/((\\+91-?)|0)?\d{10}$/)
    .required(),

  boothid: Joi.string().required(),

  boothno: Joi.string().required(),

  citizenadress: Joi.string().required(),

  citizencity: Joi.string().required(),

  citizenstate: Joi.string().required(),
});

module.exports = { managecitizenschema };
