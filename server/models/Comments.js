module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    commentBody: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
  });

  return Comments;
};
