const express = require("express");
const authController = require("../Controllers/auth-controller");
const viewController = require("../Controllers/views_controller");
const serviceController = require("../Controllers/services_controller");

const session = require('express-session');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.route("/").get(authController.index);
;
// Login and Register Routing.

router.route("/admin").get(authController.admin);
router.route("/admin").post(authController.verifyadmin);
router.route("/adminIndex").get(authController.adminIndex);
router.route("/usersInfo").get(authController.userInfo);
router.route("/serviceInfo").get(serviceController.viewServices);
router.route("/contactInfo").get(authController.viewContactData);

router.route("/deleteService/:id").get(serviceController.serviceDelete);

router.route("/adminLogout").get(authController.adminLogout);

router.route("/login").get(authController.login);
router.route("/login").post(authController.verifylogin);
router.route("/logout").get(authController.logout);

router.route("/register").get(authController.register);
router.route("/register").post(     
check('username').trim().isLength({ min: 3 }).escape().withMessage('Enter valid Name'),
check('email').trim().isEmail().normalizeEmail().withMessage('Enter a valid Email'),
check('phone').isNumeric().isLength({min: 10}).withMessage('Enter a valid number'),
check('password').isLength({min: 8}).withMessage('Password Must Be at Least 8 Characters')
.matches('[0-9]').withMessage('Password Must Contain a Number')
.matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter'),authController.checkUser);

// Other pages.
router.route("/userProfile").get(authController.userProfile);

router.route("/contact").get(viewController.contactUs);
router.route("/addContactData").post(viewController.addContactData);

router.route("/services").get(viewController.services);
router.route("/aboutUs").get(viewController.aboutUs);

router.route("/header").get(authController.header);
router.route("/footer").get(authController.footer);

router.route("/bookService").get(viewController.bookService);
router.route("/addService").post(serviceController.addService);


module.exports = router;