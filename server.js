require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./src/db');
const { auth } = require('./src/utils/middlewares')

const userRouter = require('./src/routes/user');
const productRouter = require('./src/routes/product');

const port = process.env.PORT || 8000;

const app = express();
db();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/products', auth, productRouter)
app.use('/users', userRouter)



app.listen( port, () => 
    console.log(`server listening on http://localhost:${port}`)
); 