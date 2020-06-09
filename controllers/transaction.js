const Transaction = require('../models/Transaction');

// @desc Get all transaction
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
   try {
      const transaction = await Transaction.find();
      return res.status(200).json({
         success: true,
         count: transaction.length,
         data: transaction,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         error: 'Server Error',
      });
   }
};

// @desc Add or Update transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransactions = async (req, res, next) => {
   try {
      let transaction;
      if(!req.body._id)
         transaction = await Transaction.create(req.body)
      else
         awaitUpdateOne = await (transaction = await Transaction.findById(req.body._id)).updateOne(req.body);

      return res.status(201).json({
         success: true,
         data: transaction,
      });
   } catch (error) {
      if (error.name === 'ValidationError') {
         const messages = Object.values(error.errors).map(val => val.message);
         return res.status(400).json({
            success: false,
            error: messages,
         });
      } else {
         return res.status(500).json({
            success: false,
            error: 'Server Error',
         });
      }
   }
};

// @desc Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransactions = async (req, res, next) => {
   try {
      const transaction = await Transaction.findById(req.params.id);
      if (!transaction)
         return res.status(404).json({ success: false, error: 'Transaction not found.' });
      await transaction.remove();
      return res.status(200).json({ success: true, data: {} });
   } catch (error) {
      return res.status(500).json({
         success: false,
         error: 'Server Error',
      });
   }
};
