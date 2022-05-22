export interface IMail{
        from:string;
        to:string|Array<String>;
        subject:string;
        tenantUrl:string;
        html:string;
}

export interface IMailSendResponse{
        status:number,
        msg:string

}