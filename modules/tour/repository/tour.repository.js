import {TourModel} from "../models/tour.js";

const create = async (data) => {
    try{
        const tour = await TourModel.create(data);
        return tour;
    }catch (error) {
        throw new Error(error.message);
      }
};

const getAllTours = async () => {
  try {
    const tours = await TourModel.find({});
    return tours;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findById = async (id) => {
  try {
    const tour = await TourModel.findById(id);
    if (!tour) {
      throw new Error("Tour not found");
    }
    return tour;
  } catch (error) {
    throw new Error(error.message);
  }
};

const TourRepository =  {
    create,
    getAllTours,
    findById
};

export default TourRepository;