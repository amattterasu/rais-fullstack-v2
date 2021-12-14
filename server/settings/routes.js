import Router from "express";
import cors from "cors";
import TestController from "../controllers/TestController.js";
import UserController from "../controllers/UsersController.js";
import ProductsController from "../controllers/ProductsController.js";
import passport from "passport";
import path from "path";

const router = new Router();

router.get("/", (req, res) => {
  res.send("HELLO FROM RAIS SERVER API");
});

router.use(cors());
// router.get("/test", passport.authenticate('jwt', {session: false}) , TestController.getTest);
router.get("/test" , TestController.getTest);
router.get("/users", UserController.getAllUsers);

router.get("/products", ProductsController.getAllProducts);

// router.get("/send", (req, res) => {
//   res.sendFile(path.join(path.resolve(), '', '123b.png'))
// });

router.post("/auth/register", UserController.register);
router.post("/auth/login", UserController.login);

export default router;
