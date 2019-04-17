const jwt = require('jsonwebtoken');

module.exports.Get = function (req, res) {
    const user = {
        id: 1, 
        name: 'Yüksel',
        surname: 'Aktepe',
        email: 'yukselaktepe@hotmail.com.tr'
      }
    
      jwt.sign({user}, 'secretkey',  (err, token) => {
        res.json({
          token
        });
      });

}

module.exports.Post = function (req, res) {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            //....
          res.json({
            message: 'Post...',
            authData
          });
        }
      });
}

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
module.exports.verifyToken = function(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
  }