// importamos la conexion a la base de datos
const mongoose = require("../libs/mongo");
// importamos el modelo de la base de datos
const cards = require("../models/cards");
// creamos la clase CreditCardsService

class CreditCardsService {
  constructor() {
  }

  // metodo para agregar una tarjeta de credito
  async addCreditCard(card) {
    const newCard = new cards(card);
    return await newCard.save();
  }

  // metodo para obtener todas las tarjetas de credito
  async getCreditCards() {
    return await cards.find({});
  }

  // metodo para actualizar una tarjeta de credito
  async updateCreditCard(id,card) {
    const creditCard = await cards.findById(id);
    if (creditCard) {
      creditCard.titular = card.titular;
      creditCard.numero = card.numero;
      creditCard.expiracion = card.expiracion;
      creditCard.cvv = card.cvv;
      return await creditCard.save();
  }
  return null;
  }

  // metodo para eliminar una tarjeta de credito
  async deleteCreditCard(id) {
    const creditCard = await cards.findById(id);
    if (creditCard) {
      return await cards.findByIdAndDelete(id);
    }
    return null;
  }
}

module.exports = CreditCardsService;
