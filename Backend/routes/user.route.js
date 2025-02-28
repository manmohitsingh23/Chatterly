import express from "express";
import {
  allUsers,
  login,
  logout,
  signup,
} from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allusers", secureRoute, allUsers);
// Get public key of a user
// router.get('/getPublicKey/:id', getPublicKey);
// router.get('/getPrivateKey', secureRoute, getPrivateKey);

export default router;