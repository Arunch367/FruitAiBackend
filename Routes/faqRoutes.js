import express from "express";
import {
  getFaqs,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
} from "../Controller/faq.js";

const router = express.Router();

// Get all FAQs
router.get("/", getFaqs);

// Get FAQ by ID
router.get("/:id", getFaqById);

// Create new FAQ
router.post("/", createFaq);

// Update FAQ
router.put("/:id", updateFaq);

// Delete FAQ
router.delete("/:id", deleteFaq);

export default router;
