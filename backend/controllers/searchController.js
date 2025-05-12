import Product from "../models/productModel.js";

// Search controller
export const searchProductsController = async (req, res) => {
  try {
    const { keyword } = req.query;

    // Agar keyword empty hai toh empty array return kar do
    if (!keyword) {
      return res.json([]);
    }

    // Regex ke through name aur description me search
    const results = await Product.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    });

    res.json(results);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Search failed" });
  }
};
