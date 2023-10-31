'use strict';

const product = require('../public/api/initial_data/products.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('product-info', product);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('product-info', {
      id: product.map(({ id }) => id),
    });
  }
};
