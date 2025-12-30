const express = require("express");
const { register, login } = require("../controllers/authController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Test protected routes
router.get("/user-dashboard", protect, (req, res) => {
  res.json({ message: "User Dashboard Accessed" });
});

router.get("/admin-dashboard", protect, adminOnly, (req, res) => {
  res.json({ message: "Admin Dashboard Accessed" });
});

module.exports = router;
