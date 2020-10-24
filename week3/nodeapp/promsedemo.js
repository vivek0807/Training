/* const fs = require('fs').promises;
fs.readFile("data.txt", "utf-8").then(data=>console.log(data)).catch(err=>console.log(err)) */

const axios = require('axios');
async function test() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data)
    } catch (err) {
        console.log(err)
    }
}
test()
/* const axios = require('axios');
axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    console.log(response.data)
}).catch((err) => {
    console.log(err)
}) */