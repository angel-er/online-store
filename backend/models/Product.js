const {Schema, model, SchemaType} = require('mongoose');
const {ObjectId} = Schema;

const productSchema = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true, trim: true},
    description: {type: String},
    quantity: {type: Number, required: true, trim: true},
    image: [{data: Buffer, contentType: String}],
    idCategory: [{type: ObjectId, ref: 'Category', required: true}],
  },
  {timestamps: true}
);

module.exports = model('Product', productSchema);
