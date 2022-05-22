const configInit = require("./config");
import cluster from "cluster";
import App from "./loaders/App";

if (cluster.isMaster) {
  configInit();

  App.loadServer();
  App.loadDatabase();

} else {
  console.log("no");
}
