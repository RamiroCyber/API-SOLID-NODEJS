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

        this.mailProvider.sendMail({
            to: {
                name: name,
                email: email,
            },
            from: {
                name: 'Ramiro Ribeiro',
                email: 'ramiro.dgr@gmail.com',
            },
            subjet: 'Bem vindo',
            body: 'Voce ja pode fazer login'

        })
    }
}