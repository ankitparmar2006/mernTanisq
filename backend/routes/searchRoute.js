import express from "express";
import { searchProductsController } from "../controllers/searchController.js";

const router = express.Router();

// Search route
router.get("/search", searchProductsController);

export default router;
