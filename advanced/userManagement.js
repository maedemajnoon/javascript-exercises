/**
 * Problem:
 * Write a simple user management system that allows adding and removing users,
 * and showing the list of users.
 *
 * Your task:
 * Implement the functions `addUser`, `removeUser`, and `showUsers` that
 * manage a list of users.
 *
 * Example:
 * addUser("Alice");
 * showUsers() should return ["Alice"].
 * removeUser("Alice");
 * showUsers() should return [].
 */
let users = [];

function addUser(user) {
  users.push(user);
}
function removeUser(user) {
  // if (users.includes(user)) {
  //   ////users.filter((item) => item !== user);
  //   let temp = users.indexOf(user);
  //   users.splice(temp, 1);
  // }
  users = users.filter((u) => {
    u !== user;
  });
}
function showUsers() {
  return users;
}

module.exports = { addUser, removeUser, showUsers };
