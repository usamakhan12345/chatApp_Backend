import joi from 'joi'


export const userSchemaValidation = joi.object({
    full_name : joi.string().required(),
    email : joi.string().email().required() ,
    phone : joi.string().max(12),
    password : joi.string().min(6).required()
})