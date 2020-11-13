import { config } from "dotenv";

const { parsed } = config();

export const {
  port,
  MODE,
  IN_PROD = MODE !== "prod",
  //remember to add mongodb/collections name
  DB = "mongodb://localhost:27017/",
} = parsed;
