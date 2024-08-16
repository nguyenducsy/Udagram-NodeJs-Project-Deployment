# UDAGRAM Project

## Description
UDAGRAM is a full-stack project to create a English Midpoint website that help Fsofter register and learn English onine. Curently,  this website has main functions:
- Register Student
- Login/Log out
- Show all information about courses
- Register course on the table of courses
- Show registered courses 


### Link Github: https://github.com/nguyenducsy/Udagram-NodeJs-Project-Deployment 
Author: Le Hong Thai

## Technology
- Front-end:
    - Angular 18
    - NodeJS
    - Angular Material Framework
    - Bootstrap 5
    - TSLint
    - Jasmine and Karma
- Back-end:
    - NodeJS
    - Express
    - JWT token
- DB:
    - Postgres
- Pipeline:
    - CircleCI
- Cloud Services:
    - AWS RDS
    - AWS Elastic Beanstalk
    - AWS S3

## Dependencies
```
    - Node v18.20.4 (LTS) or more recent. 
    - Angular CLI v18.1.1
    - NPM v10.8.2, (LTS) or more recent, Yarn can work but was not tested for this project
    - AWS CLI v2, v1 can work but was not tested for this project
    - AWS EB CLI
    - Postgres Database to run locally

```

## Enviroment Variables
To run the project, we need config some Environment Variables in the created .env file in the udagram-api folder:

```
- POSTGRES_HOST         = <Database_IP_Address>
- POSTGRES_PORT         = <Database_Port>
- POSTGRES_USERNAME     = <Database_Username>
- POSTGRES_PASSWORD     = <Database_Password>
- POSTGRES_DB           = <Database_Name>
- JWT_SECRET            = <Any_PassPhrase>
- AWS_REGION            = <us-east-1>
- AWS_PROFILE           = <Profile>
- AWS_BUCKET            = <Bucket_Name>
- AWS_ACCESS_KEY_ID     = <AWS_Access_key_id>
- AWS_SECRET_ACCESS_KEY = <AWS_secret_access_key>
- AWS_DEFAULT_REGION    = <us-east-1>

```

## AWS Cloud Services
- DB:
    - RDS Host: database-1.cis7fzfi1nuk.us-east-1.rds.amazonaws.com
    - Port: 5432
    - Database Name: database-1

- Back-end:
    - Platform: NodeJS 18 run on Linux
    - Elastic Beanstalk URL : http://udagram-lasted-env.eba-4bxkacbt.us-east-1.elasticbeanstalk.com

- Front-end:
    -  S3 Endpoint URL: http://udagram-last.s3-website-us-east-1.amazonaws.com

## Pipeline - CircleCI
The sequence jobs: 
- Setting Environment Variables
- Install NodeJS
- Checkout Code
- Config AWS Access Key
- Install AWS CLI
- Install Front-end Dependencies
- Install API Dependencies
- Build Angular Front-end project
- Build API project
- Deploy API project to AWS Elastic Beanstalk
- Deploy Angular project to AWS S3 Bucket

## Project Setup
1. Clone source code from GitHub: https://github.com/LeThai98/UdagramFullstack
2. Install NodeJS v18, NPM v10, Angular CLI v18
3. Install and create DB on the Postgress Database if want to run locally
4. Create .env file in the udagram-api source and config environment variable to connect to DB
5. Config 'apiHost' in the environment.ts and environment.prod.ts file to point to the API

## Install Dependencies, Build, Start, Testing, Deploy

Go into the project directory, open Git Bash:
### Install Dependencies
1. Install the dependencies for Front-end: `npm run frontend:install`
2. Install the dependencies for Back-end: `npm run api:install`

### Start Project
1. Start Back-end: `npm run api:start`
2. Start Front-end: `frontend:start`

### Testing
Only have Unit test using the Jasmine Framework on the Front-end project

Run Unit-test: `npm run frontend:test`

### Build project
1. Build API
- Building API project will create Archive.zip file, therefore the 7-zip application has been installed in locall machine first, and then create the Environment Variable on your local machine to run script regarding to zip.
- Build API: `npm run api:build`
- The script will create building file in the `www` folder 

*** Maybe there is the different creating zip file on Mac/Window/Linux. Please research and config `build` script in the package.json file in the api project to run poperly. 

- Window:
` "build": "npm install . && npm run clean && tsc && cp -rf src/config www/config  && cp .npmrc www/.npmrc && cp package.json www/package.json && cd www && 7z a Archive.zip . && cd ..`

- Mac:
` "build": "npm install . && npm run clean && tsc && cp -rf src/config www/config && cp package.json www/package.json && cd www && zip -r Archive.zip . && cd .." `


2. Build Front-end
- Build Front-end project: `npm run frontend:build`
- The script will create building file in the `dist` folder

### Deploy
1. Deploy API: `npm run api:deploy`
2. Deploy Front-end: `npm run frontend:deploy`

## Infrastructure
Refer to the Docs folder to get info:
- Project Diagram
- Pipeline Diaram
- Screenshots
