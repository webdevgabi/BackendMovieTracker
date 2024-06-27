const { find } = require("../database/")
let myString = "qwertzuiopasdfghjklyxcvbnmQWERTZUIOPASDFGHJKLYXCVBNM0123456789";

const tokenGenerator = async () => {
    let isUnique = false;
    let hash = '';

    while(!isUnique) {
        for (let i = 0; i < 50; i++) hash += myString[Math.floor(Math.random() * myString.length)];

        const isTokenExist = await find({ collection: 'tokens', condition: { token: hash } });
        if(!isTokenExist) {
            isUnique = true;
            return hash;
        };

        hash = '';
    }

};

module.exports = tokenGenerator;