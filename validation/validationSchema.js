import { body } from 'express-validator';

export const formBodyValidation = [
    body('name', 'Name should be at least 2 chars').isLength({ min: 2 }),
    body('platform', 'Platform should be selected').isLength({ min: 1 }),
    body('description', 'Password should be at least 5 chars').isLength({
        min: 5,
    }),
];
