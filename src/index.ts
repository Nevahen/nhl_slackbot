import * as Express from 'express';

const app = Express();

app.listen(8080);

app.use((req, res, next) => {
  if (req.query.challenge) {
    return res.send(req.query.challenge)
  }    
  return next();
});