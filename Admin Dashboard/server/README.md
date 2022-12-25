**Installation**
1. Use "npm i" to install dependencies.
2. create .env file in server directory.
3. Add "PORT = 5001" and mongo db connection URL to "MONGO_URL" variable and secret key to "JWT_SECRET_KEY" variable.

**Database**
If using a personal database uncomment the commented part in "Mongoose Setup" part save once and comment/delete it to load the mock data into database.

**Running**
npm run dev: run server in development mode(nodemon).

npm run start: run server in deployment mode.
