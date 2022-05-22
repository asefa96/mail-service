import { IMail } from "./mail";

export interface IMailService{
    getMails():any;
    getMailers():any;
    sendMail(mail:IMail):Promise<String>;
    
}