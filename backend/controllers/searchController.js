const Product = require("../models/Product");

const searchProduct = async (req, res) => {
  const { query } = req.query;

  try {
    const results = await Product.find({
      name: { $regex: query, $options: "i" },
    });

    res.json(results);
  } catch (err) {
    console.error("Search Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { searchProduct };
