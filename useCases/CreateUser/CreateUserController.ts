import { CreateUserUseCase } from './CreateUserUseCase';
import { Request, Response } from 'express';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async execute(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password
            })
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({
                error: 'Bad request'
            })
        }
    }
}