import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  orderStatusController,
  getAllOrdersController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password | post
router.post('/forgot-password', forgotPasswordController)

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user Route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true })
})
//protected admin Route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true })
})

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//ORDERS
router.get('/orders', requireSignIn, getOrdersController)
//ORDERS
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)

//status upsata
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController)

export default router;
