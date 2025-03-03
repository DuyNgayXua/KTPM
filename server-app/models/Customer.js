const mongoose = require("mongoose");

const CusSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  sdt: { type: String, required: true },
    diachi: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Customer", CusSchema);
