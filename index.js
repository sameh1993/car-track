require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const { connectDB } = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// ── Middleware ──────────────────────────────────────────────
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Static frontend ─────────────────────────────────────────
app.use(express.static(path.join(__dirname, "public")));

// ── API Routes ──────────────────────────────────────────────
app.use("/api/cars", require("./routes/cars"));
app.use("/api/odometer", require("./routes/odometer"));
app.use("/api/oil", require("./routes/oil"));
app.use("/api/filters", require("./routes/filters"));
app.use("/api/licenses", require("./routes/licenses"));
app.use("/api/reports", require("./routes/reports"));

// ── Health check ────────────────────────────────────────────
app.get("/api/health", (_req, res) =>
  res.json({ status: "ok", time: new Date().toISOString() }),
);

// ── Catch-all → frontend ────────────────────────────────────
app.get("*", (_req, res) =>
  res.sendFile(path.join(__dirname, "public", "index.html")),
);

// ── Global error handler (لازم يكون آخر middleware) ─────────
app.use(errorHandler);

// ── Start ───────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;

// mysql://root:uMbwdbOeMTJWkcyHvfEKaHhXpgqYXOdL@roundhouse.proxy.rlwy.net:12340/railway

app.listen(PORT, () => {
  console.log(`\n🚗  Car Tracker (MVC) شغال على http://localhost:${PORT}\n`);
});
