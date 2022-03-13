# API BUG Ticket
## Short-Summary/Title: 
New user registration api failed by returning a 400 status

## Details/Description: 
When a new user tried to register with any different email id other than reqres.in user receive back

## Steps to Reproduce:
1. Make an POST call to the /api/register endpoint with the below json payload
{
    "email": "eve.holt@mailinator.in",
    "password": "pistol"
}


## Expected Result: 
Receive http status code 200 with a response json containing an id and token as below example.
{
    "id": 4,
    "token": "QpwL5tke4Pnpja7X4"
}

## Actual Result: 
Receiving a http status 400 with an error message saying "Note: Only defined users succeed registration".

## Severity: 
Critical

## Priority: 
Medium (As this is failing with only specific domain based emailIds and working with other domains like reqres.in)

## Environment: 
Test-Env: dev, api-version: v1,

## Status: 
New

## Unique Report id: 
api-test-bug-01

## Author: 
Vamsi Darbhamulla

## Assigned To: 
Business-Analyst/Product-Owner/Project-Manager/Team-Lead/Scrum-Master/Developer (based on project & process)

## Attachments:
![Alt text](registration-api-error.png?raw=true "registration-api-error.png")




