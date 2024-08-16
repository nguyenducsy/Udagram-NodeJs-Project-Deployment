import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  POSTGRES_PORT: Number(process.env.POSTGRES_PORT),
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: '123',
  },
};


// export const config = {
//   username: "udagram",
//   password: "rds#udacity",
//   database: "udagram",
//   host: "udagram.cwfxz8nf1xrj.us-east-1.rds.amazonaws.com",
//   aws_region: "us-east-1b",
//   aws_profile: "",
//   aws_media_bucket: "",
//   url: "http://localhost:8080/",
//   jwt: {
//     secret: "abc",
//   },
// };
