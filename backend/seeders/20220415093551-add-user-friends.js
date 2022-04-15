module.exports = {
 up: async (queryInterface) => {
    const dummyJSON = [];
    for (let i = 0; i < 1000; i++) {
      const ran1 = Math.floor(Math.random() * 50);
      const ran2 = Math.floor(Math.random() * 50);
      if (ran1 && ran2 && ran1 !== ran2) {
        dummyJSON.push({
          user_id: ran1,
          friend_id: ran2,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }
    await queryInterface.bulkInsert('userFriends', dummyJSON, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('userFriends', null, {});
  },
};
