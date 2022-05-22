import ServiceConfigDto from "../scripts/dtos/serviceConfigDto";
import { IMailService } from "../types/mailService";
import { IMail } from "../types/mail";
import Mailer from "../models/Mailer";
import Form from "../models/Form";

const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

export default class MailService implements IMailService {
  public getMails() {
    return new Promise(async (resolve, reject) => {
      const data = await Form.find();
      if (!data) {
        reject("error occred get mail");
      }
      resolve(data);
    });
  }

  public getMailers() {
    return new Promise(async (resolve, reject) => {
      const data = await Mailer.find();
      if (!data) {
        reject("error occred get mail");
      }
      resolve(data);
    });
  }

  public sendMail(mail: IMail): Promise<String> {
    return new Promise((resolve, reject) => {
      const transporter = nodemailer.createTransport(
        smtpTransport(new ServiceConfigDto())
      );
      transporter.sendMail(mail, (err: any, info: any) => {
        if (err) {
          reject(new Error("An error occured sending an email, err:" + err));
        }
        transporter.close();
        resolve(info);
      });
    });
  }
}
