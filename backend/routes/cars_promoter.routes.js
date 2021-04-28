module.exports = app => {
    
    const cars = require("../controllers/car.controller.js");
  
    var router = require("express").Router();
  
    router.post("/create", cars.create);
  
    router.get("/cars", cars.findAll);
  
    

    router.post("/bymodel", cars.findAllByModel);

    
  
    router.put("/update", cars.update);
  
    router.delete("/delete", cars.deleteOne);
  
    

    app.use('', router);

};
