import express from "express";
import Express from "../middlewares/Express";

class Server {
  public _express: express.Application;

  constructor() {
    this._express = express();
  }

  private mountServer(): void{
    this._express = Express.mountRoutes(this._express);
    this._express = Express.mountServer(this._express);
  }

  private mountMiddlewares(): void {
    this._express = Express.mountMiddlewares(this._express);
  }

  public init() {
    this.mountMiddlewares();
    this.mountServer();
  }
}

export default new Server;
