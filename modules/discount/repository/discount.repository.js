import {DiscountModel} from "../models/discount.js";
const create = async (data) => {
  try {
    const discount = await DiscountModel.create(data);
    return discount;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllDiscounts = async () => {
  try {
    const discounts = await DiscountModel.find({});
    return discounts;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findByTour = async (tour) => {
  try {
    const tours = await DiscountModel.find({ tour });
    return tours;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findById = async (id) => {
  try {
    const discount = await DiscountModel.findById(id);
    if (!discount) {
      throw new Error("Discount not found");
    }
    return discount;
  } catch (error) {
    throw new Error(error.message);
  }
};
const DiscountRepository = {
    create,
    findByTour,
    findById,
    getAllDiscounts
  };
  
export default DiscountRepository; 