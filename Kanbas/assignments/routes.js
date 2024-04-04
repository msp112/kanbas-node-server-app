import Database from "../Database/index.js";
function AssignmentsRoutes(app) {
    app.delete("/api/assignments/:mid", (req, res) => {
        const { mid } = req.params;
        Database.assignments = Database.assignments.filter((m) => m._id !== mid);
        res.sendStatus(200);
      });
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };
        Database.assignments.push(newAssignment);
        res.send(newAssignment);
      });
      app.put("/api/assignments/:mid", (req, res) => {
        const { mid } = req.params;
        const assignmentIndex = Database.assignments.findIndex(
          (m) => m._id === mid);
        Database.assignments[assignmentIndex] = {
          ...Database.assignments[assignmentIndex],
          ...req.body
        };
        res.sendStatus(204);
      });

    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = Database.assignments
            .filter((m) => m.course === cid);
        res.send(assignments);
        });
            
//   app.get("/api/courses/assignments", (req, res) => {
//     const assignments = Database.assignment;
//     res.send(assignments);
//   });
};export default AssignmentsRoutes;