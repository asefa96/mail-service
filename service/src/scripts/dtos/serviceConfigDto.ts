import { IMailServiceConfig,AuthSMTP } from "../../types/mailServiceConfig";

export default class ServiceConfigDto implements IMailServiceConfig{
    host: string;
    port: string;
    secure?: boolean;
    auth: AuthSMTP;
    service:string

    constructor(){
        this.host=process.env.SMTP_HOST!;
        this.port=process.env.SMTP_PORT!;
        this.service=process.env.SMTP_SERVICE!;
        this.auth={
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    }
    
}