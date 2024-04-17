import * as dao from "./dao.js";

function ModuleRoutes(app) {

  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    res.json(module);
  };
  app.post("/api/courses/:cid/modules", createModule)

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid)
  };
  app.delete("/api/modules/:mid", deleteModule)

  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules(); 
    res.send(modules);
  };
  app.get("/api/modules", findAllModules)

  const findModulesByCourse = async (req, res) => {
    const {course} = req.body; 
    const currentModules = await dao.findModulesByCourse(course); 
    res.json(currentModules);
  }
  app.get("/api/modules", findModulesByCourse);

  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.moduleId);
    res.json(module); 
  };
  app.get("/api/courses/:moduleId/modules", findModuleById) 

  const updateModule = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateModule(id, req.body); 
    const currentModule = await dao.findModuleById(id); 
    res.json(status); 
  };
  app.put("/api/modules/:mid", updateModule)
}

export default ModuleRoutes;
