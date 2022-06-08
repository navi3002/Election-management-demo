const Joi = require("joi");

const citizenloginschema = Joi.object({
  citizenadhaar: Joi.string()
    .max(12)
    .regex(/\d{4}\d{4}\d{4}/)
    .required(),
});

module.exports = { citizenloginschema };
