
interface IAdress {
    email: string;
    name: string;
}

export interface IMessege {
    to: IAdress;
    from: IAdress;
    subject: string;
    body: string;
}


export interface IMailProvider {
    sendMail(messege: IMessege): Promise<void>;
}