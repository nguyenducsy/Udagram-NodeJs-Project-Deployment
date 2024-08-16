# eb init myUdagramAPI --region us-east-1
# eb use MyUdagramAPI-env
# eb deploy MyUdagramAPI-env

cd ./www/
eb init --platform node.js-18 --region us-east-1 myUdagramAPI
eb use MyUdagramAPI-env
eb setenv POSTGRES_HOST=$POSTGRES_HOST POSTGRES_USERNAME=$POSTGRES_USERNAME POSTGRES_PASSWORD=$POSTGRES_PASSWORD POSTGRES_DB=$POSTGRES_DB DB_PORT=$DB_PORT AWS_REGION=$AWS_REGION AWS_PROFILE=$AWS_PROFILE AWS_BUCKET=$AWS_BUCKET JWT_SECRET=$JWT_SECRET

eb deploy 