const express = require('express');
const { router } = require('./routes/router');
const { dbConnection } = require('./config/dbConnect');
const { User } = require('./model/userModel');
const app = express();
const port = 3000;

app.use(express.json());

app.use("/",router)
app.get('/', (req, res) => {
  res.send('Hello World');
});
User.sync({alter:true});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  dbConnection();
});
