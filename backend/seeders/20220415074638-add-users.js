const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface) => {
    const dummyJSON = [];
    for (let i = 0; i < 50; i++) {
      dummyJSON.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        avatar: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('Users', dummyJSON, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
