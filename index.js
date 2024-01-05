const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const router = require('./router');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.use("/api",router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
