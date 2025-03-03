const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const captainController = require('../controllers/captain.controller');

router.post('/register',[
    body('fullname.firstname').isLength({min : 3}).withMessage("First name must be atleast three character"),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min : 6}).withMessage("Password must required"),
    body('vehicle.color').isLength({min : 3 }).withMessage('Color must be atleast three chracters'),
    body('vehicle.plate').isLength({min : 3 }).withMessage('Plate must be atleast three chracters'),
    body('vehicle.capacity').isInt({min : 1 }).withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type')
],   
    captainController.registerCaptain
)

module.exports = router;