import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { MysqlUserRepository } from './../../repositories/implementations/MysqlUserRepository';
import { MailtrapMailProvider } from './../../providers/implementations/MailTrapMailProvider';


const mailTrapMailProvider = new MailtrapMailProvider();

const mysqlUserRepository = new MysqlUserRepository();

const createUserUseCase = new CreateUserUseCase(
    mysqlUserRepository,
    mailTrapMailProvider
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserController, createUserUseCase }