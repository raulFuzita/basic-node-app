const express = require('express');

const app = express();
const prt = 8000;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});