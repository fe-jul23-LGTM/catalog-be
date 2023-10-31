/** @type {import('sequelize-cli').Migration} */

async function up1(queryInterface, Sequelize) {
  await queryInterface.createTable('product-info', {
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

async function down1(queryInterface) {
  await queryInterface.dropTable('product-info');
}

module.exports = {
  down1,
  up1,
};
