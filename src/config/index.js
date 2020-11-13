import { config } from "dotenv";

const { parsed } = config();

export const {
  port,
  MODE,
  IN_PROD = MODE !== "prod",
  DB = "mongodb://localhost:27017/apollo-ordering-app",
} = parsed;
