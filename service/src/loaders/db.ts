import Locals from "./Locals";
import mongoose from "mongoose";
import { ConnectOptions} from "mongodb";

 class MongoDB{
    public async init(){
        const url=Locals.config().mongooseUrl
        
        const options =  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          } as ConnectOptions;

        await mongoose.connect(url!,options, (error: mongoose.CallbackError) => {
			if (error) {
				console.log('Failed to connect to the Mongo server!!');
				console.log(error);
				throw error;
			} else {
				console.log('connected to mongo server at: ' + url);
			}
		});

    }
}

export default new MongoDB