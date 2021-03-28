// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  select(cb) {

    orm.select('burgers', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  insert(cols, vals, cb) {
    orm.insert('burgers', cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, (res) => cb(res));
  },
  
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
