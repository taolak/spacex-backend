
################
    DB SETUP
################

Perequisite:
- Mongo DB (use: https://docs.mongodb.com/manual/installation/)
- Node JS (use: https://nodejs.org/en/)

Commands:
npm install -g mongo-seeding-cli

seed -u 'mongodb://127.0.0.1:27017/spacex' --drop-database ./db/data

#############################
    APP INTSALLATION
#############################

npm i