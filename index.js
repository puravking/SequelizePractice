const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello Worl');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
