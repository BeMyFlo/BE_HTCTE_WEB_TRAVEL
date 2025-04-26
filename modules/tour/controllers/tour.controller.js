import TourRepository from "../repository/tour.repository.js";
import { uploadImageToFirebase } from "../../../services/uploadImage.js";

export const getListTour = async (req, res) => {
    try {
      const tours = await TourRepository.getAllTours();
      res.status(200).json({ success: true, data: tours});
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

export const createTour = async (req, res) => {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({ success: false, message: "No image uploaded" });
      }
  
      const imageUrl = await uploadImageToFirebase(req.file);
  
      const tour = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        discount_price: req.body.discount_price,
        image_url: imageUrl,
        rating: req.body.rating,
        is_hot: req.body.is_hot,
        collection_id: req.body.collection,
        list_vehicle: req.body.list_vehicle
      };
      const newTour = await TourRepository.create(tour);
  
      res.status(200).json({ success: true, data: newTour });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
};

export const getTourById = async (req,res) => {
    try{
        const tour = await ProductRepository.getTourById(id);
        res.status(200).json({ success: true, data: tour });
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
}