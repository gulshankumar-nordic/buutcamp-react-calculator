const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/users')
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log("Error ...");
})