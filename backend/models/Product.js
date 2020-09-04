const {Schema, model, SchemaType} = require('mongoose');
const {ObjectId} = Schema;

const productSchema = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true, trim: true},
    description: {type: String},
    quantity: {type: Number, required: true, trim: true},
    idImage: {type: ObjectId, ref: 'Image', required: true},
    idCategory: [{type: ObjectId, ref: 'Category', required: true}],
  },
  {timestamps: true}
);

module.exports = model('Product', productSchema);
