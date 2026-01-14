import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Inquiry = mongoose.model("Inquiry", InquirySchema);
