const express = require('express');
const router = express.Router();
const creditCardsService = require('../services/creditCards');

const services = new creditCardsService();

//GET
router.get('/', async (req, res, next) => {
    try {
        const creditCards = await services.getCreditCards();
        res.json(creditCards);
    } catch (error) {
        next(error);
    }
});

// POST
router.post('/', async (req, res, next) => {
    try {
        const creditCard = await services.addCreditCard(req.body);
        res.json(creditCard);
    } catch (error) {
        next(error);
    }
}
);

// PUT
router.put('/:id', async (req, res, next) => {
    try {
        const creditCard = await services.updateCreditCard(req.params.id,req.body);
        res.json(creditCard);
    } catch (error) {
        next(error);
    }
}
);

// DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const creditCard = await services.deleteCreditCard(req.params.id);
        res.json(creditCard);
    } catch (error) {
        next(error);
    }
}
);

module.exports = router;