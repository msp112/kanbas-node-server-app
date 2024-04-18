import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String},
    course: {type: String},
    endDate: {type: String}, 
    lessons: {type: Array}
  },
  { collection: "modules" });
export default moduleSchema;
//object
//objectt