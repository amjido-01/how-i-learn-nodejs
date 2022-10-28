const {users, lan} = require('./message');
const fs = require('fs');

// const people = require('./message')
console.log(lan, users);

// read file
fs.readFile("./doc/test.json", "utf-8", (err, data) => {
    if (err) {
        console.log(`err is: ${err}`);
        return;
    } try {
        const userData = JSON.parse(data)
        let randomValue = Math.floor(Math.random() * userData.lenght);
        // console.log(userData[randomValue].title);
        console.log(userData[2].title)
    } catch (err) {
        console.log(err);
    }
})

fs.readFile("./doc/test.txt", "utf8", (err, data) => {
    if (err) {
        console.log(`the error is: ${err}`);
        return;
    }
    try {
        const myData = data;
        console.log(myData);
    } catch (err) {
        console.log(`second err is ${err}`)
    }
});

// write file
fs.writeFile('./doc/test.txt', 'i love javascript', (err) => {
    if (err) {
        console.log(err)
    } else{
        console.log('file written!')
    } 
})

