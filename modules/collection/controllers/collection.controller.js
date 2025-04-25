import CollectionRepository from "../repository/collection.repository.js";
import { uploadImageToFirebase } from "../../../services/uploadImage.js";

export const getListCollection = async (req, res) => {
    try {
      const collections = await CollectionRepository.getAllCollections();
      res.status(200).json({ success: true, data: collections});
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

export const createCollection = async (req, res) => {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({ success: false, message: "No image uploaded" });
      }
  
      const imageUrl = await uploadImageToFirebase(req.file);
  
      const collection = {
        name: req.body.name,
        description: req.body.description,
        list_image_url: imageUrl,
      };
      const newCollection = await TourRepository.create(collection);
  
      res.status(200).json({ success: true, data: newCollection });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
};
