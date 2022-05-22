import MailService  from "../services/Mail.service";
import { IMailService } from "../types/mailService";
import { IResponse, IRequest, INext } from "../types/express";

import { IForm } from "../types/form";
import FormMail from "../scripts/dtos/formNotificationMail";

import Form from "../models/Form";
import Mailer from "../models/Mailer";

const httpStatus = require("http-status");

class MailServiceController {
  public static mailService: IMailService;

  constructor() {
    MailServiceController.mailService = new MailService();
  }

  public index(req: IRequest, res: IResponse, next: INext) {
    res.status(200).send("<h1>Hello Service</h1>");
  }

  public async sendMail(req: any, res: IResponse, next: INext) {
    const form = new Form(req.body as IForm);
    form
      .save()
      .then(() => {
        MailServiceController.mailService
          .sendMail(new FormMail(req.body as IForm))
          .then((resp) => {
            res.status(httpStatus.CREATED).json({ resp, status:"success" });
          })
          .catch((err) => {
            res
              .status(httpStatus.INTERNAL_SERVER_ERROR)
              .json({ err: err.message });
          });
      })
      .catch((err) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ err: err.message });
      });
  }

  public async getMailerList(req: IRequest, res: IResponse, next: INext) {
    const data = await MailServiceController.mailService.getMailers()
    res.status(httpStatus.OK).json(data);
  }

  public setMailerList(req: IRequest, res: IResponse, next: INext) {
    const createMailer = new Mailer(req.body);
    createMailer
      .save()
      .then((resp) => {
        res.status(httpStatus.CREATED).json({ resp, status:"success" });
      })
      .catch((err) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ err: err.message });
      });
  }

  public async getMailList(req: IRequest, res: IResponse, next: INext) {
    const data = await MailServiceController.mailService.getMails()
    res.status(httpStatus.OK).json(data);
  
  }
}

export default new MailServiceController();
