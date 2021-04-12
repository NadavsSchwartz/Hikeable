import { config } from "dotenv";
import mongoose from "mongoose";
// eslint-disable-next-line import/extensions
import app from "./app.js";

config({ path: "./config.env" });

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParse: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful"));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
