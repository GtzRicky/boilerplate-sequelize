const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return participants.init(sequelize, DataTypes);
}

class participants extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    conversation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'conversations',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'participants',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "participants_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return participants;
  }
}
