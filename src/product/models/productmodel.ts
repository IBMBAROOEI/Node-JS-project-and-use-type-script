import mongoose, { Schema,Model, Document } from "mongoose";



type productDocument = Document & {
  name: string;
  price: number;
  description: string;
};

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true }
});



const IProduct: Model<productDocument> = mongoose.model<productDocument>('Product', ProductSchema);

export { IProduct ,productDocument};

