module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
  });

  // Users.associate = models => {
  //   Users.hasMany(models.Posts, {
  //     onDelete: 'cascade',
  //   });
  // };

  return Users;
};
