import express from "express"; 
import session from "express-session";
import "dotenv/config";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentsRoutes from "./Kanbas/assignments/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);
const app = express(); 
app.use(cors({   credentials: true,
    origin: process.env.FRONTEND_URL,
 }));
 const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  app.use(session(sessionOptions));
//kittens  ss
//  const sessionOptions = {
//     secret: "any string",
//     resave: false,
//     saveUninitialized: false,
//   };
//   app.use(
//     session(sessionOptions)
//   );
  

app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app); 

//Calculator(app);
Lab5(app);
Hello(app);
UserRoutes(app);

//app.listen(4000);
app.listen(process.env.PORT || 4000); 

//https://kanbas-node-server-app-pax-4b55a95c8bfd.herokuapp.com/ Render Server 
// https://kanbas-node-server-app-exvd.onrender.com