import { Router } from 'express';

const router = Router();

router.post('/user', (resquest, response) => {
    response.status(201).send();
});

export { router };