import model from "./model.js";
export const createCourse = (course) => {
    delete course._id;
    model.create(course);
} 
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
//export const findUserByUsername = (username) =>  model.findOne({ username: username });
//export const findUserByCredentials = (username, password) =>  model.findOne({ username: username, password: password });
export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
//export const findUsersByRole = (role) => model.find({ role: role });
