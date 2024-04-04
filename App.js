import express from "express"; 
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentsRoutes from "./Kanbas/assignments/routes.js";
import cors from "cors";
//import Calculator from "./Calculator.js";

const app = express(); 
app.use(cors());

app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app); 

//Calculator(app);
Lab5(app);
Hello(app);

//app.listen(4000);
app.listen(process.env.PORT || 4000); 
