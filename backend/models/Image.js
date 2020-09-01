const {Schema, model} = require('mongoose');

const imageSchema = new Schema(
  {
    image: Buffer,
  },
  {timestamps: true}
);

module.exports = model('Image', imageSchema);
