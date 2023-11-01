/** @type {import('sequelize-cli').Migration} */

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('create_product_info_in_detail', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    namespaceId: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    capacityAvailable: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    capacity: {
      type: Sequelize.STRING,
    },
    priceRegular: {
      type: Sequelize.INTEGER,
    },
    priceDiscount: {
      type: Sequelize.INTEGER,
    },
    colorsAvailable: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    color: {
      type: Sequelize.STRING,
    },
    images: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    description: {
      type: Sequelize.TEXT,
    },
    screen: {
      type: Sequelize.STRING,
    },
    resolution: {
      type: Sequelize.STRING,
    },
    processor: {
      type: Sequelize.STRING,
    },
    ram: {
      type: Sequelize.STRING,
    },
    camera: {
      type: Sequelize.STRING,
    },
    zoom: {
      type: Sequelize.STRING,
    },
    cell: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
  });
}

async function down(queryInterface) {
  await queryInterface.dropTable('create_product_info_in_detail');
}

module.exports = {
  down,
  up,
};
