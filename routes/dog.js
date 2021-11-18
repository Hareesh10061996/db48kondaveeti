var express = require('express');
var router = express.Router();
const dog_controller= require('../controllers/dog');

/* GET Text */ 
router.get('/', dog_controller.dog_view_all_Page );


// GET request for one costume.
router.get('/dog/:id', dog_controller.dog_detail);


/* GET create dog page */
router.get('/create', dog_controller.dog_create_Page);

router.get("/detail", dog_controller.dog_view_one_Page);


router.get('/update', dog_controller.dog_update_Page);

router.get('/delete', dog_controller.dog_delete_Page);

module.exports = router;