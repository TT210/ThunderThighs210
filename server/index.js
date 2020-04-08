const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(process.cwd(), '/client/public')));

// // Sample route
// app.get('/', (req, res) => {
//     //res.send(path.join(process.cwd(), '/client/public'));
//     res.send('test1')
// });







app.listen(process.env.PORT || port, () => {
    console.log(`Server is Listening`);
});