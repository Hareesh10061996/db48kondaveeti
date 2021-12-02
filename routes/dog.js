var express = require('express');
var router = express.Router();
const dog_controller= require('../controllers/dog');

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET Text */ 
router.get('/', dog_controller.dog_view_all_Page );


// GET request for one costume.
router.get('/dog/:id', dog_controller.dog_detail);


/* GET create dog page */
router.get('/create',secured, dog_controller.dog_create_Page);

router.get("/detail", dog_controller.dog_view_one_Page);


router.get('/update',secured, dog_controller.dog_update_Page);

router.get('/delete',secured, dog_controller.dog_delete_Page);

module.exports = router;