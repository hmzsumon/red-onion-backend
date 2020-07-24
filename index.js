const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const PORT = process.env.PORT || 3500;
const DB_PATH = process.env.DB_PATH;

mongoose.connect(
  DB_PATH,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Database Connect Successfully!');
    }
  }
);

app.listen(PORT, () =>
  console.log(`Server is running on the port http://localhost:${PORT}`)
);
