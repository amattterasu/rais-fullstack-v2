import passportJWT from "passport-jwt";
import config from "../config/config.js";
import { connection } from "../settings/db.js";

const options = {
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt,
};

export function usePassword(passport) {
  passport.use(
    new passportJWT.Strategy(options, (payload, done) => {
      try {
        connection.query(
          `SELECT id, email FROM users WHERE id = ${payload.userId}`,
          (error, rows, fields) => {
            if (error) {
              console.log(error);
              return;
            }
            const user = rows;
            if (user) {
              done(null, user);
            } else {
              done(null, false);
            }
          }
        );
      } catch (e) {
        console.error(e);
      }
    })
  );
}
