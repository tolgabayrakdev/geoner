import Joi from 'joi';

const UserCreateSchema = Joi.object({
  username: Joi.string().min(3).max(24).required(),
  email: Joi.string().min(3).max(34).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});
export default UserCreateSchema;
