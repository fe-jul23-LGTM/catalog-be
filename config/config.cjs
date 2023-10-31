require('dotenv').config();

const DB_URL = 'postgres://denys:OMyxvFIdHuI5NjIEQ4Ce7gQO69ruG4n6@dpg-cl0jg4s8s0fs73bt6uh0-a.frankfurt-postgres.render.com/products_board_db_6e98';

const dbConfig = {
  url: DB_URL,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development: { ...dbConfig },
  production: { ...dbConfig },
};
