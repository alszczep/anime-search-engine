# Anime List
 Search for favourite animes, and add those to your list. Uses [jikan.moe API](https://jikan.moe/).

## [Live Demo](https://al-szczep-anime-list.herokuapp.com/)

## How to use

To run it locally you will need node with npm or another package manager installed on your machine(tested using node v14.15.0). 
You will also need to install postgreSQL and import database schema (instructions in src/database.sql). After you clone/download a repository, 
navigate to its directory and install needed modules for both back-end and front-end:

`npm run installAll`

After the installation process you can run a server in development mode using:

`npm run devServer`

And the client (you will have to use another terminal):

`npm run devClient`

To run tests for both client and server use:

`npm run testAll`

You can also run following commands in root and front-end folders:

`npm run build`

`npm test`

`npm start`
