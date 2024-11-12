import { Timestamp } from 'bson';
import mongoose from 'mongoose';
import { type } from 'os';

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYear: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        tyepe: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
      {
        OurseInHospital: {
          type: new Timestamp(),
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
