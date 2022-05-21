import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private userRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) { }

    async execute({ name, email, password }: ICreateUserDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }
        const user = new User(name, email, password);

        await this.userRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: name,
                email: email,
            },
            from: {
                name: 'Ramiro Ribeiro',
                email: 'ramiro.dr@gmail.com',
            },
            subject: ' Seja Bem Vindo',
            body: 'Você ja pode fazer login na plataforma'

        })
    }
}