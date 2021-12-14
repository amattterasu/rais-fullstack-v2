import { connection } from "../settings/db.js";
import { response } from "../response.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

class UserController {
  getAllUsers(_, res) {
    connection.query("SELECT email FROM users", (error, rows) => {
      if (error) {
        response(400, error, res);
        return;
      }
      response(200, rows, res);
    });
  }

  register(req, res) {
    // Проверка существования email
    connection.query(
      `SELECT email FROM users WHERE email = "${req.body.email}"`,
      (error, rows) => {
        if (error) {
          response(400, error, res);

          return;
        }
        // Если существует
        if (!!rows && rows.length > 0) {
          const parsedRows = JSON.parse(JSON.stringify(rows));
          parsedRows.map((r) => {
            response(
              302,
              {
                message: `Пользователь с email ${r.email} уже зарегистрирован!`,
              },
              res
            );

            return true;
          });

          return;
        }
        // Иначе регистрация
        const email = req.body.email;
        // Генерация соли
        const salt = bcrypt.genSaltSync(15);
        // Хеширование пароля + соль
        const password = bcrypt.hashSync(req.body.password, salt);
        const sql = `INSERT INTO users (email, password) VALUES("${email}", "${password}")`;

        connection.query(sql, (error, results) => {
          if (error) {
            response(400, error, res);

            return;
          }
          response(
            200,
            { message: `Регистрация прошла успешно!`, results },
            res
          );
        });
      }
    );
  }

  login(req, res) {
    // Проверка существования email
    connection.query(
      `SELECT id, email, password FROM users WHERE email = "${req.body.email}"`,
      (error, rows) => {
        if (error) {
          response(400, error, res);

          return;
        }
        // Проверка на наличие email в БД
        if (rows.length === 0) {
          response(
            401,
            {
              message: `Пользователь с email ${req.body.email} не найден!`,
            },
            res
          );

          return;
        }

        const parsedRows = JSON.parse(JSON.stringify(rows));
        parsedRows.map((r) => {
         // Синхронная проверка пароля на соответствие хэша в БД
          const password = bcrypt.compareSync(req.body.password, r.password);
          if (password) {
            // Если пароли совпадают, то генерируется токен
            const token = jwt.sign(
              {
                userId: r.id,
                email: r.email,
              },
              config.jwt,
              { expiresIn: 120 * 120 }
            );

            response(200, { token: `Bearer ${token}` }, res);
          } else {
            response(401, { message: `Пароль неверный.` }, res);
          }

          return true;
        });
      }
    );
  }
}

export default new UserController();
