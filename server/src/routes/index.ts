import { Router } from "express";
import dashboardRoutes from "./dashboard-routes";
import ProductRoutes from "./product-routes";

const router = Router();

router.use(dashboardRoutes);
router.use(ProductRoutes);
export default router;
