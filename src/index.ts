import * as Express from 'express';
import bodyParser = require('body-parser');

const app = Express();

app.listen(8080);

app.use(bodyParser.json());
app.use((req, res, next) => {
  if (req.body.challenge) {
    return res.send(req.body.challenge)
  }    
  return next();
});