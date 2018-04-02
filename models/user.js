const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    bizName: { type: String, required: true },
    bizCategory: { type: String, required: true },
    coType: {type: String, required: true},
    password: { type: String, required: true },
    email: {type: String, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
