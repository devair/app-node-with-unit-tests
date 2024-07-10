import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const isTestEnvironment = process.env.NODE_ENV === "test";

const entities = process.env.TYPEORM_ENTITIES 


export const AppDataSource = new DataSource({
  type: "mongodb",
  url: isTestEnvironment ? process.env.MONGODB_URI : undefined,
  host: isTestEnvironment ? undefined : process.env.TYPEORM_HOST,
  port: isTestEnvironment ? undefined : parseInt(process.env.TYPEORM_PORT!, 10),
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,  
  entities: [ `${process.env.TYPEORM_ENTITIES}` ]  
});
