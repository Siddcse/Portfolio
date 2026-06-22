import mongoose, { Schema, models } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// Prevent model re-compilation during hot-reload
const Contact = models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
