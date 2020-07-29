const express = require('express');
const app = express();
var host = process.env.HOST || "localhost";
var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/health', (req, res) => res.send('OK'));

app.listen(port, host, () => console.log(`Example app listening at http://${host}:${port}`));