import { uuid } from 'uuidv4';
export class User {

    id?: string;
    name: string;
    email: string;
    password: string;

    constructor(name, email, password) {
        if (!this.id) {
            this.id = uuid();
        }
    }

}