/**
 * Define App Locals & Configs
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Application } from "express";
import * as path from "path";
import * as dotenv from "dotenv";
import { IConfig } from "../types/config";

class Locals {
  public static config(): IConfig {
    dotenv.config({ path: path.join(__dirname, "../../.env") });

    const port = process.env.PORT || 4040;
    const mongooseUrl = process.env.MONGOOSE_URL;

    return {
      mongooseUrl,
      port,
    };
  }

  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default  Locals;
