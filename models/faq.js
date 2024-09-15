import mongoose from "mongoose";
const faqSchema = new mongoose.Schema({
  fruitName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});
const Faq = mongoose.model("Faq", faqSchema);

export default Faq;
