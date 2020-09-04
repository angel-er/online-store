const {Schema, model} = require('mongoose');

const imageSchema = new Schema(
  {
    image: [{data: Buffer, contentType: String}],
  },
  {timestamps: true}
);

module.exports = model('Image', imageSchema);
