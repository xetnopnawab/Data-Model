import mongoose from 'mongoose';

// const orderItemSchema = new mongoose.Schema({
//   productId: {
//     type: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'product',
//     },
//     quantity: {
//       type: Number,
//       required: true,
//     },
//   },
// });

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schemama.Types.ObjectId,
      ref: 'User',
    },
    // orderItem: {
    //   type: [orderItemSchema],
    // },
    orderItem: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
      },
      {
        quantity: {
          type: Number,
          required: tru,
        },
      },
    ],
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
