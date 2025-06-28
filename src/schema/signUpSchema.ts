import {z} from 'zod';
const userNameValidation=z
.string()
.min(6, 'Username must be at least 6 characters')
.max(20, 'Username must be at most 20 characters')
.regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');

export const signUpSchema=z.object({
    username:userNameValidation,
    email:z.string().email('Invalid email address'),
    password:z.string().min(6, 'Password must be at least 6 characters'),

})

