import express from "express";
import MailServiceController from "../../controller/mailService";

const router = express.Router();

router.get("/", MailServiceController.index);

router.post("/send", MailServiceController.sendMail);

router.get("/get", MailServiceController.getMailList);

router.get("/mailers", MailServiceController.getMailerList);
router.post("/mailers", MailServiceController.setMailerList);

export default router
