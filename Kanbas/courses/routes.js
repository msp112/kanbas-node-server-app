import * as dao from "./dao.js";
export default function CourseRoutes(app) {

   const createCourse = async (req, res) => {
    const currentCourse = await dao.createCourse(req.body);
    res.json(currentCourse);
  };
  app.post("/api/courses", createCourse);

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);     
  };
  app.delete("/api/courses/:courseId", deleteCourse); 

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses(); 
    res.send(courses);
  };
  app.get("/api/courses", findAllCourses) 

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.courseId);
    res.json(course); 
    };
    app.get("/api/courses/:courseId", findCourseById);

   const updateCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body); 
    const currentCourse = await dao.findCourseById(id); 
    res.json(status); 
   };
    app.put("/api/courses/:id", updateCourse)
  }
