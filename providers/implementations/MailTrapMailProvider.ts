import { IMailProvider, IMessege } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
    private transport: Mail;

    constructor() {
        this.transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "5c13710e12d9b9",
                pass: "4f363361e0d718"
            }
        });
    }

    async sendMail({ to, from, subject, body }: IMessege): Promise<void> {
        await this.transport.sendMail({
            to: {
                name: to.name,
                address: to.email,
            },
            from: {
                name: from.name,
                address: from.email,
            },
            subject: subject,
            html: body
        })
    }
}