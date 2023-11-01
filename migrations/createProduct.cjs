/** @type {import('sequelize-cli').Migration} */

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('product_info', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    category: {
      type: Sequelize.STRING,
    },
    itemId: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    fullPrice: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    screen: {
      type: Sequelize.STRING,
    },
    capacity: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING,
    },
    ram: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.STRING,
    },
  });
}

async function down(queryInterface) {
  await queryInterface.dropTable('product_info');
}

module.exports = {
  down,
  up,
};
