import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

// Your products array
const products = [
  { id: 1, name: "Rose Elegance", price: 3500, size: 50, quantity: 15, type: "Floral", image: "/images/Rose Elegance.jpg", featured: true },
  { id: 2, name: "Ocean Breeze", price: 4200, size: 100, quantity: 10, type: "Fresh", image: "/images/Ocean Breeze.jpg", featured: true },
  { id: 3, name: "Midnight Oud", price: 5800, size: 75, quantity: 7, type: "Woody", image: "/images/Midnight Oud.jpg", featured: true },
  { id: 4, name: "Jasmine Whisper", price: 3600, size: 50, quantity: 20, type: "Floral", image: "/images/Jasmine Whisper.jpg" },
  { id: 5, name: "Lily Grace", price: 3300, size: 75, quantity: 12, type: "Floral", image: "/images/Lily Grace.jpg" },
  { id: 6, name: "Orchid Dreams", price: 3900, size: 100, quantity: 8, type: "Floral", image: "/images/Orchid Dreams.jpg" },
  { id: 7, name: "Citrus Aura", price: 3100, size: 50, quantity: 15, type: "Fresh", image: "/images/Citrus Aura.jpg" },
  { id: 8, name: "Morning Dew", price: 3300, size: 75, quantity: 10, type: "Fresh", image: "/images/Morning Dew.jpg" },
  { id: 9, name: "Aqua Mist", price: 4200, size: 100, quantity: 7, type: "Fresh", image: "/images/Aqua Mist.jpg" },
  { id: 10, name: "Amber Nights", price: 5500, size: 50, quantity: 5, type: "Woody", image: "/images/Amber Nights.jpg" },
  { id: 11, name: "Cedar Essence", price: 4900, size: 75, quantity: 8, type: "Woody", image: "/images/Cedar Essence.jpg" },
  { id: 12, name: "Sandalwood Whisper", price: 6000, size: 100, quantity: 4, type: "Woody", image: "/images/Sandalwood Whisper.jpg" },
  { id: 13, name: "Velvet Noir", price: 7500, size: 50, quantity: 3, type: "Luxury", image: "/images/Velvet Noir.jpg" },
  { id: 14, name: "Golden Mirage", price: 8200, size: 75, quantity: 2, type: "Luxury", image: "/images/Golden Mirage.jpg" },
  { id: 15, name: "Crystal Serenity", price: 9000, size: 100, quantity: 1, type: "Luxury", image: "/images/Crystal Serenity.jpg" }
];

// GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET filtered products
app.get("/api/products/filter", (req, res) => {
  const { type, maxPrice, minQuantity, size } = req.query;

  const filtered = products.filter((p) => {
    const matchType = !type || type === "All" || p.type === type;
    const matchPrice = !maxPrice || p.price <= Number(maxPrice);
    const matchQty = !minQuantity || p.quantity >= Number(minQuantity);
    const matchSize = !size || size === "All" || p.size === Number(size);
    return matchType && matchPrice && matchQty && matchSize;
  });

  res.json(filtered);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
