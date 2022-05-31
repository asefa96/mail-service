
export interface IMail{
    name:string;
    company:string;
    phone:string;
    createdAt:string;
    mail:string;
}

export interface IMailer{
    name:string;
    company:string;
    mail:string;
}



export interface IMailService{
    getMails():Promise<Array<IMail>>;
    getMailers():Promise<Array<IMailer>>;
}