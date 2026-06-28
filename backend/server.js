import { configDotenv } from "dotenv";
configDotenv({ path: "./.env" });
import app from "./app.js";
import mongoose from "mongoose";

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
