import {CollectionModel} from "../models/collection.js";
const create = async (data) => {
  try {
    const collection = await CollectionModel.create(data);
    return collection;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllCollections = async () => {
  try {
    const collections = await CollectionModel.find({});
    return collections;
  } catch (error) {
    throw new Error(error.message);
  }
};

// const findById = async (id) => {
//   try {
//     const collection = await CollectionModel.findById(id);
//     if (!collection) {
//       throw new Error("Collection not found");
//     }
//     return collection;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
const CollectionRepository = {
    create,
    //findById,
    getAllCollections
  };
  
export default CollectionRepository; 