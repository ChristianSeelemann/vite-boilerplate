import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_request, response) => {
  response.send('Hello Server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
