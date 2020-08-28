module.exports = {
  async up(db, client) {
    const currentTimeStump = new Date();

    return await db.collection('users').insertMany([
      {
        email: 'testadmin@test.com',
        name: 'Test Admin',
        passwword: 'QSsdfclawe34eo9d#__sadsd22D',
        created_at: currentTimeStump
      },
      {
        email: 'testguest@test.com',
        name: 'Test Quest',
        passwword: 'ASDXZLASCxckasldkw(@Q3elkMSAL',
        created_at: currentTimeStump
      }
    ]);
  },

  async down(db, client) {
    return await db.collection('users').deleteMany({});
  }
};
