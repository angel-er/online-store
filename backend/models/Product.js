const {Schema, model, SchemaType} = require('mongoose');

const productSchema = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true, trim: true},
    description: {type: String},
    quantity: {type: Number, required: true, trim: true},
    idImage: [{type: Schema.Types.ObjectId}],
    idCategory: [{type: Schema.Types.ObjectId, require: true}],
  },
  {timestamps: true}
);

module.exports = model('Product', productSchema);
