import {createUserController} from'../useCases/CreateUser';

import { request, Router } from 'express';

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.execute(request, response);
});

export { router };