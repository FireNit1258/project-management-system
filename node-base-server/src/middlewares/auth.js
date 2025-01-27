require('dotenv').config()
const jwt = require('jsonwebtoken');
const { getExpirytime} = require('../helpers/common');

const auth = (req, res, next) => {
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'TokenEmpty',
      data: null
    });
  }

  try {
    
    const decoded_token = jwt.verify(token, process.env.SECRET_KEY);
    console.log('TOKEN REQ',token)
    if(decoded_token) {
        const token_expiry = decoded_token.exp;
        const current_time = getExpirytime(0); 
        if( current_time < token_expiry ) { 
            next();
        } else {
            return res.status(401).json({
                success: false,
                message: 'TokenExpired',
                data: null
              });
        }
    } else {
       
        return res.status(401).json({
            success: false,
            message: 'TokenNotDecoded',
            data: null
          });
    }
      
  } catch (err) {
    console.log(err.message)
    return res.status(401).json({
      success: false,
      message: 'TokenInvalid',
      data: null
    });
  }
};

module.exports = auth;
