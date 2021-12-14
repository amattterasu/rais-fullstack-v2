import { connection } from "../settings/db.js";
import { response } from "../response.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

class ProductsController {
  getAllProducts(_, res) {
    connection.query("SELECT * FROM product", (error, rows) => {
      if (error) {
        response(400, error, res);
        return;
      }
      response(200, rows, res);
    });
  }
}

export default new ProductsController();
