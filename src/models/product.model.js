  const { Schema, model } = require('mongoose');

  const productSchema = new Schema({
    name:{
      type: 'String',
      required: [ true, 'por favor ponle nombre al producto' ],
    },
    image:{
      type: 'String',
      required: true,
    },
    price:{
      type: 'Number',
      required: true,
    },
    description:{
      type: 'String',
      required: true,
    },
  }, {
    timestamps: true
  })

  const Product = model('Product', productSchema );

  module.exports = Product;


  