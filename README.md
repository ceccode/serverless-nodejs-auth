# serverless-nodejs-auth

[![Build Status](https://travis-ci.org/ceccode/serverless-nodejs-auth.svg?branch=master)](https://travis-ci.org/ceccode/serverless-nodejs-auth)
[![https://david-dm.org/ceccode/serverless-nodejs-auth.svg](https://david-dm.org/ceccode/serverless-nodejs-auth.svg)](https://david-dm.org/ceccode/serverless-nodejs-auth.svg)

Nodejs AWS custom authorizer and auth service: user authentication using JWT.

This is an example of how to protect API endpoints with custom auth, JSON Web Tokens (jwt) and a custom authorizer lambda function.

Custom Authorizers allow developers authorize their APIs using bearer token authorization strategies using an AWS Lambda function. For each request, API Gateway verifies whether a custom authorizer is configured and if so, API Gateway calls the Lambda function with the authorization token. This is useful in Microservice Architectures or to do Authorization before running the business logic.
 
## Technologies

* ES6 + babel + webpack
* NodeJS
* AWS serverless
* moment, pinojs, jwt-simple


## Install

Clone the project

```
npm install
```

### Configuration

Update your serverless.yml file and set environment vars:

```
environment:
  APP_NAME: serverless-nodejs-auth
  TOKEN_SECRET: D5\x12\x03\xaa\xe6\x97\xe6\x1b\x9cjT~\x0c\x1f\xffg\xe1O\xef\xbeL\xc6\n //These will be used by the JSON web token decoder to validate private api access.
  CRYPTO_BYTE_SIZE: 512  //see https://nodejs.org/api/crypto.html
```

## Deploy

```
npm run deploy
```

## Test & Coverage

Run all tests and coverage

```
npm test
```

### Invoke functions

Examples:

```
$ serverless webpack invoke --function login --path mocks/login-event.json
$ serverless webpack invoke --function publicEndpoint
```

## Run offline

```
$ serverless offline
```

and play with curl/postman

## Api

### Login

Find user in our (mocked) database and return the authorization token.

```
[POST] /login 
```

Example

**Request object**

```
{
  "username": "francesco",
  "password": "password"
}
```

**Success Response**

```
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDM5NjE3NzAsImlhdCI6MTUwMjc1MjE3MCwic3ViIjoiNTQzMjM0IiwicGF5bG9hZCI6eyJ1c2VybmFtZSI6ImZyYW5jZXNjbyIsIm5hbWUiOiJGcmFuY2VzY28gRi4iLCJzY29wZSI6IiJ9fQ.7yhLN1ylK_v_yOURwJ-SCYDeumNJINJ7n1ScX5OT8No"
}
```

### Authorizer

API Gateway extracts the token from the custom header as the input authorizationToken parameter value into the Lambda function and calls the custom authorizer with the following request payload. Read more on the docs [here](http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html).

```
{
  "type": "TOKEN",
  "authorizationToken": "<Incoming bearer token>",
  "methodArn": "arn:aws:execute-api:<Region id>:<Account id>:<API id>/<Stage>/<Method>/<Resource path>"
}
```

The custom authorizer's Lambda function returns an Error or a Policy document.

request response:

```

{
  "principalId": "user",
  "policyDocument": {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": "execute-api:Invoke",
        "Effect": "Deny",
        "Resource": "arn:aws:execute-api:us-west-2:123456789012:ymy8tbxw7b/*/GET/"
      }
    ]
  }
}
```

### publicEndpoint

```
[GET] /publicEndpoint
```

**Success Response**

```
{
  "message": "Welcome to our Public API!",
  "input": {...},
  "context": {...}
```

### privateEndpoint

```
[GET] /privateEndpoint
```

**request header example**

```
{
  "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDM5NjI0NTcsImlhdCI6MTUwMjc1Mjg1Nywic3ViIjoiNTQzMjM0IiwidXNlciI6eyJ1c2VybmFtZSI6ImZyYW5jZXNjbyIsIm5hbWUiOiJGcmFuY2VzY28gRi4iLCJzY29wZSI6IiJ9fQ.4akWarB3VazM4uoKFpzHkgItfq9pX6BzczzczOGGTI4"
}
```

**Success Response**

Token is valid.

```
{
  "message": "Only logged in users can see this",
  "input": {
    requestContext: {
      ...
      "authorizer": {

      }
    }
    ...
  },
  "context": {...}
}
```

**Error Response**

Token is invalid.

```
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Unauthorized"
}
```

###  Events

See `mocks` folder for examples

##  TODO

* attach real provider(s)
* implement logout, register, password recover, user validation
* improve docs

##  License

MIT
