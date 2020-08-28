module.exports = {
  async up(db, client) {
    await db.createCollection('conversations', {
      validator: {
        $jsonSchema: {   
          bsonType: "object",
          required: ['name', 'actor_id'],
          properties: {
            name: {
              bsonType: 'string',
            },
            actor_id: {
              bsonType: 'objectId',
            }
          }
        }
      },
      validationLevel: 'strict',
      validationAction: 'error',
    });
  },

  async down(db, client) {
    return await db.collection('conversations').drop();
  }
};
