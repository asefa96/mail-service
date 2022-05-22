import mongoose from "mongoose";
import { IForm } from "../types/form";

interface IFormModel extends IForm, mongoose.Document {
  insertForm(form: IForm): string;
}

const FormSchema = new mongoose.Schema<IFormModel>(
  {
    name: { type: String, unique: false },
    mail: { type: String, unique: false },
    company: { type: String, unique: false },
    phone: { type: String, unique: false },
    isTermsAccept: { type: Boolean, unique: false },
    isCommunicationAccept: { type: Boolean, unique: false },
    message: { type: String, unique: false },
    contacttype: { type: String, unique: false },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model<IFormModel>("Form", FormSchema);

export default Form;
