import mongoose from "mongoose";
const {Schema} = mongoose;
const schema = new Schema(
    {
        tour_id: {
            type: Schema.Types.ObjectId,
            ref: "Tour",
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    }
)
export const DiscountModel = mongoose.model("Discount",schema);