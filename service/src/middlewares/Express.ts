import { Application } from "express";
import express from "express";
import mailRoute from "../api/routes/mail";
import bodyParser from 'body-parser';

const helmet = require("helmet");
const cors = require("cors");

class Express {
  public _express: express.Application;

  constructor() {
    this._express = express();
  }

  public mountRoutes(_express: Application): Application {
    console.log("Routes :: Mounting Web Routes...");

    _express.use("/mail", mailRoute);

    return _express;
  }

  public mountMiddlewares(_express: Application): Application {
    console.log("Middlewares :: Mounting Web Routes...");

    _express.use(helmet());
    _express.use(cors());

    _express.use(bodyParser.urlencoded({ extended: false }))
    _express.use(bodyParser.json())

    return _express;
  }

  public mountServer(_express: Application): Application {
    _express.listen(8081, () => {
      console.log("server is runningport: http://localhost:8081");
    });

    return _express;
  }
}

export default new Express();
