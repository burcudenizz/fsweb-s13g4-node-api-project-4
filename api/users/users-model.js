const { v4: uuidv4 } = require("uuid");
uuidv4();

//1-random id üreten bir fonksiyon tanımladık.
function getId() {
  return uuidv4();
}

//2-manuel bir user datası array olarak tanımladık.

let allUsers = [
  { id: getId(), username: "burcu", password: "burcu123" },
  { id: getId(), username: "burcu2", password: "burcu123" },
];

//3-Tüm userları return eden bir fonksiyon.

function getAllUsers() {
  return allUsers;
}

//4-Yeni bir user ekleme aşamasında(post kısmında) kullanılacak bir fonksiyon. Bu fonksiyon parametre olarak "user" alır. Biz istediğimiz user bilgisini vereceğiz.

function insertUser(user) {
  user.id = getId();
  allUsers.push(user);
  return user;
}

//5-login işlemi fonsyionu. Bu fonksiyon da user parametresi alır. bilgilerini check etmek için kullanırız.
function login(user) {
  let existUser = null;
  for (let i = 0; i < allUsers.length; i++) {
    const item = allUsers[i];
    if (item.username === user.username && item.password === user.password) {
      existUser = item;
      break; // döngü sürekli dönmesin diye bulduğu yerde bırakmasını sağlarız.
    }
    return existUser;
  }
}

module.exports = {
  getAllUsers,
  insertUser,
  login,
};
