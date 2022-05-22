import MongoDB from "./db";
import Server  from "./Server";
class App {
  public loadDatabase(): void {
    console.log("Database :: Booting @ Master...");
    MongoDB.init();
  }

  public loadServer(): void {
    console.log("Express Server :: Booting @ Master...");
    Server.init();

  }
}

export default new App