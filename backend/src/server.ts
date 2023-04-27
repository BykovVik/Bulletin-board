import app from './app';
import * as dotenv from 'dotenv'
import dbConnect from './db';

dotenv.config()

async function main() {
    await dbConnect();
}
  
main();
app.listen(process.env.PORT);