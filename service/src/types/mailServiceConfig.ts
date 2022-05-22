export interface IMailServiceConfig{
    host?:string,
    port?:string,
    secure?:boolean,
    auth?:AuthSMTP,
    service?:string
}

export interface AuthSMTP{
    user:string | undefined,
    pass:string | undefined
}