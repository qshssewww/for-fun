const express = require('express');
const Dropbox = require('dropbox').Dropbox
const dotenv = require('dotenv')
const cors = require('cors');
const path = require('path');
const helmet = require('helmet')
const bodyParser = require('body-parser');


const envPath = path.resolve(__dirname, '../.env')

dotenv.config({path: envPath});

const app = express();

const dbx = new Dropbox({ accessToken: process.env.TOKEN });
 const PORT = process.env.PORT || 4000

app.use(bodyParser.json());

 app.use(cors())
 app.use(helmet())
 
app.post('/a', (req, res) => {

	res.send('da')

	const dataToSend = req.body.data;
	const finger = req.body.finger

  dbx.filesUpload({ path: `/${finger}.txt`, contents: dataToSend })
    .then(response => {
      console.log('nice nice', response);
      res.send('nice nice');
    })
    .catch(error => {
      console.error('Ошибка при загрузке файла в Dropbox:', error);
    });
});
app.get("/a", (req, res) => {
	res.send("Server example");
});


app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));

module.exports = app;
