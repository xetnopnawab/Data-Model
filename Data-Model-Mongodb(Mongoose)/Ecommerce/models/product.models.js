import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: string,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    IND_price: {
      type: Number,
      required: tru,
      default: 0,
    },
    USD_price: {
      type: Number,
      required: tru,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
