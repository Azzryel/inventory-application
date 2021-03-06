var express = require('express');
var router = express.Router();

const multer = require("multer");

// controller models
const car_controller = require("../controllers/carController");
const category_controller = require("../controllers/categoryController");
const manufacturer_controller = require("../controllers/manufacturerController");

// multer storage
const storage = multer.diskStorage({
    destination: './public/images/uploads/',
    filename: function(req, file, callback) {
      callback(null, file.originalname);
    }
  });

const upload = multer({ storage: storage });




router.get('/',  car_controller.inventory_index);

// CAR ROUTES
// get car list
router.get("/car_list", car_controller.car_list);

// get and post car create form
router.get("/car/create", car_controller.car_create_get);
router.post("/car/create", upload.single('carpic'), car_controller.car_create_post);

// get car details
router.get("/car/:id", car_controller.car_detail);

// get and post car delete
router.get("/car/:id/delete", car_controller.car_delete_get);
router.post("/car/:id/delete", car_controller.car_delete_post);

// get and post car update
router.get("/car/:id/update", car_controller.car_update_get);
router.post("/car/:id/update", car_controller.car_update_post);


// CATEGORY ROUTES
// get category list
router.get("/category_list", category_controller.category_list);

// get and post category create form
router.get("/category/create", category_controller.category_create_get);
router.post("/category/create", category_controller.category_create_post);

// get category details
router.get("/category/:id", category_controller.category_detail);

// get and post category delete
router.get("/category/:id/delete", category_controller.category_delete_get);
router.post("/category/:id/delete", category_controller.category_delete_post);

// get and post category update
router.get("/category/:id/update", category_controller.category_update_get);
router.post("/category/:id/update", category_controller.category_update_post);


// MANUFACTURER ROUTES
// get manufacturer list
router.get("/manufacturer_list", manufacturer_controller.manufacturer_list);

// get and post manufacturer create form
router.get("/manufacturer/create", manufacturer_controller.manufacturer_create_get);
router.post("/manufacturer/create", manufacturer_controller.manufacturer_create_post);

// get manufacturer details
router.get("/manufacturer/:id", manufacturer_controller.manufacturer_detail);

// get and post manufacturer delete
router.get("/manufacturer/:id/delete", manufacturer_controller.manufacturer_delete_get);
router.post("/manufacturer/:id/delete", manufacturer_controller.manufacturer_delete_post);

// get and post manufacturer update
router.get("/manufacturer/:id/update", manufacturer_controller.manufacturer_update_get);
router.post("/manufacturer/:id/update", manufacturer_controller.manufacturer_update_post);

module.exports = router;