# cdeevfrrGames

A project for me to make games in :) 

Accessible publicly at https://cdeevfrrgames.web.app

## Architecture

There are 3 pieces here: Infrasctucture (eg databases), backend (cloudrun function), and frontend (react app hosted by firebase).

Infrastructure & backend are deployed together via terraform.

Frontend is deployed via npm calling the firebase cli.

### Deploying Terraform 

#### First time
Make sure you have terraform & gcloud installed, you can check with

- `terraform version`
- `gcloud version`

(and init gcloud if it's your first time, `gcloud init`)

Give terraform permission to edit this project (opens a browser)
- `gcloud auth application-default login`

Init terraform (once when you first pull the repo):
- `cd infrastructure`
- `terraform init`

#### Regularly

To deploy:

- `cd infrastructure`
- `terraform plan`
- `terraform apply`

## Deploying Frontend

#### First time

Make sure you have firebase CLI tools installed. You can check with 
`firebase --version`

In the ./frontend folder, initi firebase
`firebase use myProjectID`

And install node dependencies `npm i`. 

#### Regularly

`cd frontend`
`npm run build`
`npm run deploy` 
