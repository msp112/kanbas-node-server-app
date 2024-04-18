import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: { type: String },
    number: { type: String},
    startDate: {type: String},
    endDate: {type: String}, 
    image: {type: String, 
        default: "../images/reactjs.jpg"},
  },
  { collection: "courses" });
export default courseSchema;