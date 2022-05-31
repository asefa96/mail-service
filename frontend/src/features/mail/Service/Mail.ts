import axios from "axios";
import { IMailService, IMail, IMailer } from "../interfaces/IMail";

class MailService implements IMailService {
  getMailers(): Promise<IMailer[]> {
    throw new Error("Method not implemented.");
  }
  getMails(): Promise<IMail[]> {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:8081/mail/get")
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default new MailService();
