"use strict";

class UserStorage{
    static #users = {
        id: ["wnsxpfj"],
        psword: ["1234"],
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
}

module.exports = UserStorage;
