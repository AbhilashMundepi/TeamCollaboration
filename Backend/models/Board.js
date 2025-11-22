const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Board', BoardSchema);


