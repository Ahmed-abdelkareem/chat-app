const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const app = express();
app.use(express.static(publicPath));
const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})