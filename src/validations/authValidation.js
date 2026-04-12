import { celebrate, Joi, Segments } from 'celebrate';

export const registerUserSchema = celebrate(
  {
    [Segments.BODY]: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    }),
  },
  { abortEarly: false },
);

export const loginUserSchema = celebrate(
  {
    [Segments.BODY]: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  },
  { abortEarly: false },
);