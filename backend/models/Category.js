const {Schema, model, SchemaType} = require('mongoose');

const categorySchema = new Schema(
  {
    name: {type: String, unique: true, required: true},
  },
  {timestamps: true}
);

module.exports = model('Category', categorySchema);
