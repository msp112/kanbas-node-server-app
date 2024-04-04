let assignment = {
    id: 1, 
    title: "Assignment 1", 
    description: "this",
    dueDate: "01-01-2001", 
    status: "open", 
    grade: 0,
};

export default function Assignments() {
    application.get("/a5/assignment", (req, res) => {
        res.json(assignment); 
    });

    application.get("/a5/assignment/title/:newTitle", (req, res) => {
        const newTitle = req.params.newTitle; 
        assignment.title = newTitle; 
        res.send(assignment); 
    })
}