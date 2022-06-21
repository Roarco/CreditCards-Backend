const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardsSchema = new Schema({
    titular: String,
    numero: Number,
    expiracion: String,
    cvv: Number,
});


const cards = mongoose.model('cards', cardsSchema);
module.exports = cards;