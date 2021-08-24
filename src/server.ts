import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.use('/storybook', express.static('dist/storybook'));
app.use(express.static('dist/app'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
