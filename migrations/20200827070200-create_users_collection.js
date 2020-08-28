module.exports = {
  async up(db, client) {
    await db.createCollection('users', {
      validator: {
        $jsonSchema: {   
          bsonType: "object",
          required: ['email', 'name', 'passwword'],
          properties: {
            email: {
              bsonType: 'string',
              pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',
            },
            name: {
              bsonType: 'string',
            },
            passwword: {
              bsonType: 'string',
            },
            created_at: {
              bsonType: 'date',
            }
          }
        }
      },
      validationLevel: 'strict',
      validationAction: 'error',
    });
  },

  async down(db, client) {
    return await db.collection('users').drop();
  }
};
