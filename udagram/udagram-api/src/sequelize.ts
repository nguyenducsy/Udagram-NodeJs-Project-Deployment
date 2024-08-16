import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  'postgres://postgres:08112001@database-1.cis7fzfi1nuk.us-east-1.rds.amazonaws.com:5432/postgres?sslmode=disable'
  ,{
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.POSTGRES_PORT,
  dialect: "postgres",
  storage: ":memory:",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});

// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   dialect: "postgres",
//   storage: ":memory:",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   },
// });
