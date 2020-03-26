import { Schema, model } from 'mongoose';

const TransactionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },

  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },

  createAt: {
    type: Date,
    default: Date.now
  }
});

export default model('TransactionSchema', TransactionSchema);
