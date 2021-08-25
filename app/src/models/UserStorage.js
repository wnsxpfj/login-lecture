"use strict";

class UserStorage{
    static #users = {
        id: ["wnsxpfj"],
        psword: ["1234"],
        name:["장"],
};

static getUsers (...fields){
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, fields) =>{
        if (users.hasOwnProperty(fields)){
            newUsers[fields] = users[fields];
        }
        return newUsers;
    }, {});
    return newUsers;
}

static getUsersInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUsers, info)=> {
        newUsers[info] = users[info][idx];
        return newUsers;
    }, {});

    return userInfo;

}
static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);


}
}

module.exports = UserStorage;
