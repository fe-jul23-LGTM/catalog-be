'use strict';

const phones = require('../public/api/initial_data/phone.json')
const accessories = require('../public/api/initial_data/accessories.json')
const tablets = require('../public/api/initial_data/tablets.json')

const goods  = {...phones, ...accessories, ...tablets}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('goods', goods);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('goods', {
      id: goods.map(({ id }) => id),
    });
  }
};
