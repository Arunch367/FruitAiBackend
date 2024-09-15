import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import faqRoutes from "./Routes/faqRoutes.js";
const app = express();
const port = 4000 || process.env.PORT;

app.use(express.json());
app.use(cors());
connectDb();
app.use("/api/faqs", faqRoutes);
app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
