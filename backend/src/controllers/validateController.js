const validateUser = (req, res) => {
  const { usuario, senha } = req.body;
  if(usuario === 'ricardotheodoro' && senha === '1234') {
    const jwt = require('jsonwebtoken');
    const dadosUsuario = {
      nome: 'ricardotheodoro',
      email: 'ricardo@gmail.com',
      id: 1
    };

    const chavePrivada = 'consolelog.com.br';

    jwt.sign(dadosUsuario, chavePrivada, (err, token) => {
      if(err) {
        req.status(500).json({mensagem: 'Erro ao gerar o JWT'});
        return;
      }
      res.set('x-access-token', token);
      res.end();
    });
  } else {
    res.status(401).send();
    res.end;
  }
};

module.exports = {
  validateUser,
};