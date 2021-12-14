import express from "express";
import router from "./settings/routes.js";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import {usePassword} from "./middleware/passport.js";

const app = express();
const PORT = process.env.PORT ?? 5050;

app.use(morgan('dev')); 
app.use(passport.initialize())
usePassword(passport);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`App now running on port ${PORT}...`);
});