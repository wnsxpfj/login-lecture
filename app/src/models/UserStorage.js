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
}

module.exports = UserStorage;
