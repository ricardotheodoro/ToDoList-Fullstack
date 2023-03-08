const validadeToken = (req, res) => {
  const jwt = req.headers['authorization'];
  const chavePrivada = 'consolelog.com.br';

  const jwtService = require('jsonwebtoken');

  res.status(200).json(jwt);

  /*

  jwtService.verify(jwt, chavePrivada, (err) => {
    if(err) {
      res.status(403).end();
      return;
    } 
    
    // eslint-disable-next-line no-undef
    next();



  });*/
};

module.exports = {
  validadeToken,
};