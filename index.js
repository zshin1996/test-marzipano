const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 8000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('public/index.html');
})

app.listen(app.get('port'), () => {
    console.log('server is running');
})