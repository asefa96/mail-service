import mongoose from "mongoose";
import { IMailer } from "../types/mailer";

interface IMailerModel extends IMailer, mongoose.Document {
  insertMailer(form: IMailer): string;
}

const MailerSchema = new mongoose.Schema<IMailerModel>({
    name:{type:String,unique:false},
    company:{type:String,unique:false},
    mail:{type:String,unique:true},
    phone:{type:String,unique:false},
    groups:[String]
});


const Mailer = mongoose.model<IMailerModel>("Mailer", MailerSchema);

export default Mailer