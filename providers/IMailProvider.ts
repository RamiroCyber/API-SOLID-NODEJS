
interface IAdress {
    email: string;
    name: string;
}

export interface IMessege {
    to: IAdress;
    from: IAdress;
    subjet: string;
    body: string;
}


export interface IMailProvider {
    sendMail(messege: IMessege): Promise<void>;
}