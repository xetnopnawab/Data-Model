import mongoose from 'mongoose';
import { type } from 'os';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    BloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['MALE', 'FEMALE', 'OTHERS'],
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
