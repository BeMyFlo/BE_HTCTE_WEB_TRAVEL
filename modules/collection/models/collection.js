import mongoose from "mongoose";
const {Schema} = mongoose;
const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        list_image_url: {
            type: Array,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    }
)
export const CollectionModel = mongoose.model("Collection",schema);