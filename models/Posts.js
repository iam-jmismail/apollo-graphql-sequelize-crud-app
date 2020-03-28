const Sequelize = require("sequelize");
const db = require("../config/db");

module.exports = db.define("Post", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  post: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

/*

query {
  getPosts{
    id,
    title,
    post
  }
}

*/
