import Transaction from "../models/Transaction";

/**
 *
 * @param req
 * @param res
 * @param next
 */
export const getTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transaction.length,
      data: transaction
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error!'
    });
  }
}

/**
 *
 * @param req
 * @param res
 * @param next
 */
export const postTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.erros).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      })
    }
  }
}


/**
 *
 * @param req
 * @param res
 * @param next
 */
export const deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}
