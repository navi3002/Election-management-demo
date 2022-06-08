const Joi = require("joi");

const managepartyschema = Joi.object({
  partyname1: Joi.string()
    .regex(/^[A-Za-z]*\d *[A-Za-z]/)
    .required(),
  partyname2: Joi.string()
    .regex(/^[A-Za-z]*\d *[A-Za-z]/)
    .required(),
  partyname3: Joi.string()
    .regex(/^[A-Za-z]*\d *[A-Za-z]/)
    .required(),
  partyname4: Joi.string()
    .regex(/^[A-Za-z]*\d *[A-Za-z]/)
    .required(),
  partyname5: Joi.string()
    .regex(/^[A-Za-z]*\d *[A-Za-z]/)
    .required(),
  candidatename1: Joi.string()
    .regex(/^[A-Za-z]*\d *[A-Za-z]/)
    .required(),
  candidatename2: Joi.string()
    .regex(/^[A-Za-z]* \d *[A-Za-z]/)
    .required(),
  candidatename3: Joi.string()
    .regex(/^[A-Za-z]*\d *[A-Za-z]/)
    .required(),
  candidatename4: Joi.string()
    .regex(/^[A-Za-z]*\d *[A-Za-z]/)
    .required(),
  candidatename5: Joi.string()
    .regex(/^[A-Za-z]*\d *[A-Za-z]/)
    .required(),
  candidatephoneno1: Joi.string()
    .max(10)
    .regex(/((\\+91-?)|0)?\d{10}$/)
    .required(),
  candidatephoneno2: Joi.string()
    .max(10)
    .regex(/((\\+91-?)|0)?\d{10}$/)
    .required(),
  candidatephoneno3: Joi.string()
    .max(10)
    .regex(/((\\+91-?)|0)?\d{10}$/)
    .required(),
  candidatephoneno4: Joi.string()
    .max(10)
    .regex(/((\\+91-?)|0)?\d{10}$/)
    .required(),
  candidatephoneno5: Joi.string()
    .max(10)
    .regex(/((\\+91-?)|0)?\d{10}$/)
    .required(),
  boothid: Joi.string().required(),
  boothno: Joi.string().required(),
  candidatecity1: Joi.string().required(),
  candidatecity2: Joi.string().required(),
  candidatecity3: Joi.string().required(),
  candidatecity4: Joi.string().required(),
  candidatecity5: Joi.string().required(),
});

module.exports = { managepartyschema };
