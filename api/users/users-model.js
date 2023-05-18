const { v4: uuidv4 } = require("uuid");
uuidv4();

function getId() {
  return uuidv4();
}

let allUsers = [
  { id: getId(), username: "burcu", password: "burcu123" },
  { id: getId(), username: "burcu2", password: "burcu123" },
];

function getAllUsers() {
  return allUsers;
}

function insertUser(user) {
  user.id = getId();
  allUsers.push(user);
  return user;
}

function login(user) {
  let existUser = null;
  for (let i = 0; i < allUsers.length; i++) {
    const item = allUsers[i];
    if (item.username === user.username && item.password === user.password) {
      existUser = item;
      break; // döngü sürekli dönemsin diye bulduğu yerde bırakmasını sağlarız.
    }
    return existUser;
  }
}

module.exports = {
  getAllUsers,
  insertUser,
  login,
};
