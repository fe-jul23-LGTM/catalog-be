import { Sequelize } from 'sequelize-typescript';

const DB_URL = 'postgres://denys:OMyxvFIdHuI5NjIEQ4Ce7gQO69ruG4n6@dpg-cl0jg4s8s0fs73bt6uh0-a.frankfurt-postgres.render.com/products_board_db_6e98';

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    ssl: true,
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connect();