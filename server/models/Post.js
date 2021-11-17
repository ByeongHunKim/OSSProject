module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
  });

  return Posts;
};
