import { IMail } from "../../types/mail";

export default class SuccessMail implements IMail {
  from: string;
  to: string | Array<String>;
  subject: string;
  tenantUrl: string;
  html: string;

  constructor() {
    this.from = String(process.env.SMTP_USER);
    this.to = String(process.env.STATIC_MAILER);
    this.subject = "New Success Mail Registiration!";
    this.html = `
    <div style="font-family:sans-serif">

    <h1 style="color:green">  New Success Mail Submission </h1>
    <h3 style="color:red">  Hi this  a test mail! </h3>

    </div>
    
    `;
  }
}
