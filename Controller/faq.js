import Faq from "../models/faq.js";

// Get all FAQs
export const getFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.status(200).json(faqs);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get FAQ by ID
export const getFaqById = async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" });
    }
    res.status(200).json(faq);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create new FAQ
export const createFaq = async (req, res) => {
  const { fruitName, image, question, answer } = req.body;

  try {
    const newFaq = new Faq({
      fruitName,
      image,
      question,
      answer,
    });
    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update FAQ
export const updateFaq = async (req, res) => {
  const { fruitName, question, answer } = req.body;

  try {
    let faq = await Faq.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    faq.fruitName = fruitName || faq.fruitName;
    faq.question = question || faq.question;
    faq.answer = answer || faq.answer;

    await faq.save();
    res.status(200).json(faq);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete FAQ
export const deleteFaq = async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    await faq.remove();
    res.status(200).json({ message: "FAQ removed" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
