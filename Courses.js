let courses = [
    {
        id: 1,
        title: "Course 1", 
        description: "blah", 
        instrctor: "Prof Blah", 
        status: "open",
    },
]

export default function Courses(app) {
    const findAllCourses = (req, res) => {
        const query = req.query;
        if (query.instructor) {
            const instructor = query.instrctor; 
            const filteredCourses = courses.filter( 
                (course) => course.instructor == instructor
            )
        }
        res.json(filtersCourses);
        return; 
    };

    const findCourseById = (req, res) => {
        const id = req.params.id; 
        const course = courses.find((course) => course.id)
        res.json(course); 
    };

    app.get("/api/courses", findAllCourses); // If you are reading data from the server, use get. Also, the URL should have a pattern (use plural nouns, NO verbs) 
    app.get("api/courses/:id", findCourseById);

} // A common key in URLs is 'API', or 'rest', or 'data' 
