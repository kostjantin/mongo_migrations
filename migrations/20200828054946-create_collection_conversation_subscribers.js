module.exports = {
  async up(db, client) {
    return await db.createCollection('conversation_subscribers', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ['conversation_id', 'subscriber_id'],
          properties: {
            conversation_id: {
              bsonType: 'objectId',
            },
            subscriber_id: {
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
