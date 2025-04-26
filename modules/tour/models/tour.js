import mongoose from "mongoose";
const {Schema} = mongoose;
const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
            default: "",
        },
        discount_price: {
            type: Number,
            required: true,
        },
        list_vehicle: {
            type: String,
            required: true
        },
        collection_id: {
            type: Schema.Types.ObjectId,
            ref: "Collection",
            required: true,
        },
        rating: {
            type: Number,
            
        },
        is_hot: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
)
export const TourModel = mongoose.model("Tour",schema);