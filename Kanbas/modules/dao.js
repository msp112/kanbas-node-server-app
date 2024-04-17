import model from "./model.js";
export const createModule = (module) => {
    delete module._id;
    model.create(module);
} 
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);
export const findModuleByCourse = (courseId) => model.findModuleByCourse(courseId); 
//export const findUserByUsername = (username) =>  model.findOne({ username: username });
//export const findUserByCredentials = (username, password) =>  model.findOne({ username: username, password: password });
export const updateModule = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
//export const findUsersByRole = (role) => model.find({ role: role });