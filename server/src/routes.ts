import { Router } from "express";

import CurrencyController from "./controllers/CurrencyController";
import CurrencyStatisticsController from "./controllers/CurrencyStatisticsController";

const router = Router();

router.get("/currency", CurrencyController.index);
router.get("/currency-values", CurrencyStatisticsController.index);

export default router;
