const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const userRoutes = require("./routes/users");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
