import { IMail } from "../../types/mail";
import { IForm } from "../../types/form";

export default class FormMail implements IMail {
  from: string;
  to: string | Array<String>;
  subject: string;
  tenantUrl: string;
  html: string;

  constructor(params: IForm) {
    this.from = String(process.env.SMTP_USER);
    this.to = String(process.env.STATIC_MAILER);
    this.subject = "New Success Mail Registiration!";
    this.tenantUrl = `?name=${params.name}&mail=${params.mail}&company=${params.company}&phone=${params.phone}`;
    this.html = `
    <div style="font-family:sans-serif">

    <h1>  New Form Mail Submission </h1>

    <h3> <strong>E-Mail: </strong> ${params.mail} </h3>
    <h3> <strong>Company: </strong> ${params.company} </h3>
    <h3> <strong>Phone: </strong> ${params.phone} </h3>
    <h3> <strong>Term Accept: </strong> ${params.isTermsAccept} </h3>
    <h3> <strong>Communication Accept: </strong> ${params.isCommunicationAccept} </h3>
    <h3> <strong>Contact Message: </strong> ${params.message} </h3>
    <h3> <strong>Contact Type: </strong> ${params.contacttype} </h3>

    <a href="http://${process.env.API_HOST_FRONT}/tenant${this.tenantUrl}">ONAY</a>

    <a href="http://${process.env.API_HOST_FRONT}/service/tenant/reject/${this.tenantUrl}">REJECT</a>

    </div>
    
    `;
  }
}
