const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB, Customer, Product, Order } = require("./models"); // Import connectDB và models

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Kết nối MongoDB
connectDB();

// Route tạo customer
app.post("/api/customers", async (req, res) => {
  try {
    const { name, email, sdt, diachi } = req.body;
    const newCus = new User({ name, email, sdt, diachi });
    await newCus.save();
    res.status(201).json({ message: "Customer created successfully!", cus: newCus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route lấy danh sách customer
app.get("/api/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route tạo Product
app.post("/api/products", async (req, res) => {
  try {
    const { name, price, description, image, quantity, category } = req.body;
    const newProduct = new Product({ name, price, description, image, quantity, category });
    await newProduct.save();
    res.status(201).json({ message: "Product created successfully!", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route lấy danh sách Product
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route tạo Order
app.post("/api/orders", async (req, res) => {
  try {
    const { customer, products, total} = req.body;
    const newOrder = new Order({ customer, products, total });
    await newOrder.save();
    res.status(201).json({ message: "Order created successfully!", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route lấy danh sách Order
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Khởi động server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
