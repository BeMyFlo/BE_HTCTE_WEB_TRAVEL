import DiscountRepository from "../repository/discount.repository";
import Tour from "../../tour/models/tour.js";

export const getListDiscount = async (req, res) => {
    try {
      const discounts = await DiscountRepository.getAllDiscounts();
      res.status(200).json({ success: true, data: discounts });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
export const getListDiscountByTour = async (req, res) => {
    try {
      const discounts = await DiscountRepository.findByTour(
        req.params.tour
      );
      if (!discounts) {
        return res.status(404).json({ success: false, message: "Not found" });
      }
      res.status(200).json({ success: true, data: discounts });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export const createDiscount = async (req, res) => {
    try {
        const discount = {
            tour_id: req.body.tour_id,
            price: req.body.price,
            
          };
          const newDiscount = await DiscountRepository.create(discount);
         res.status(200).json({ success: true, data: newDiscount });
      }
       catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  export const getDiscountById = async (req, res) => {
    try {
      const discount = await DiscountRepository.findById(id)
      res.status(200).json({ success: true, data: discount});
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };