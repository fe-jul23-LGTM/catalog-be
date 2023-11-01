'use strict';

const phones = require('../public/api/initial_data/phones.json')
const accessories = require('../public/api/initial_data/accessories.json')
const tablets = require('../public/api/initial_data/tablets.json')

const goods = [...phones, ...tablets, ...accessories].map(product => ({
  ...product,
  description: JSON.stringify(product.description),
}));


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('create_product_info_in_detail', goods);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('create_product_info_in_detail', null, {});
  }
};
