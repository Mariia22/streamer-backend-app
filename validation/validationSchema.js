import { body } from 'express-validator';

export const formBodyValidation = [
    body('name', 'Name should be at least 2 chars')
        .isLength({ min: 2 })
        .isString(),
    body('platform', 'Platform should be selected')
        .isLength({ min: 1 })
        .isString(),
    body('description', 'Description should be at least 5 chars')
        .isLength({ min: 5 })
        .isString(),
];

export const updateVoteBodyValidation = [
    body('vote', 'Vote should be +1 or -1').matches('^(1|-1)$'),
];
