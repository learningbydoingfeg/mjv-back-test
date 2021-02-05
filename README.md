# MJV test backend Felipe Estrada G.
This project was created using express + mongoDB .

## Setting up the project.
1. To setup the project you must define on a .env file on project root and define the variables.  
```
SECRET=‘asecretstringwhateveryouchoose’
PORT=8000
MONGO_URI=mongodb://localhost:27017/mjv-database
```
2. run mongodb and create a database named mjv-database
3. run npm i 
4. run npm run dev

### Live version

You can explore a live version of this server on  https://guarded-taiga-76691.herokuapp.com

  this server respond to the routes:
* GET / 
* GET /products 
* POST /products
* GET /products/id
* PUT /products/id
* DELETE /products/id
* GET /users/id
* POST /users/signup
* POST /users/signin

