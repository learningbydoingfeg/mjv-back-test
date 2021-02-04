# mjv test backend Felipe Estrada G.

This project was created using express + mongoDB 

you can explore a live version of this server on  https://guarded-taiga-76691.herokuapp.com

  this server respond to these routes 

  / => health endpoint

  GET /products 
  POST /products
  GET /products/id
  PUT /products/id
  DELETE /products/id


  GET /users/id
  POST /users/signup
  POST /users/signin


to setup the project you must define on a .env file on project root and run mongodb 

SECRET='asecretstringwhateverypuchoose'
PORT=8000
MONGO_URI=mongodb://localhost:27017/mjv-database


to run locally your server use ```npm run dev```

