'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Budgets', 'date');

    // Add the 'startDate' and 'endDate' columns
    await queryInterface.addColumn('Budgets', 'startDate', {
      type: Sequelize.DATE,
      allowNull: false
    });

    await queryInterface.addColumn('Budgets', 'endDate', {
      type: Sequelize.DATE,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Budgets', 'date', {
      type: Sequelize.DATE,
      allowNull: false
    });

    await queryInterface.removeColumn('Budgets', 'startDate');
    await queryInterface.removeColumn('Budgets', 'endDate');
  }
};