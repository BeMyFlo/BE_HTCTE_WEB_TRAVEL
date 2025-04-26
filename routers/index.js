//import userRouter from "../modules/user/user.routes.js";
import productRouter from "../modules/product/product.routes.js";
import tourRouter from "../modules/tour/tour.routes.js";
import discountRouter from "../modules/discount/discount.routes.js";
import collectionRouter from "../modules/collection/collection.routes.js";
const useRoutes = (app) => {
  app.use("/api/product", productRouter);
  app.use("/api/tour", tourRouter);
  app.use("/api/discount",discountRouter);
  app.use("/api/collection",collectionRouter);
};
export default useRoutes;
