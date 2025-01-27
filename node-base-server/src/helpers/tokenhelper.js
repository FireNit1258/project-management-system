require('dotenv').config()
const jwt = require('jsonwebtoken');
const { getExpirytime} = require('../helpers/common');

function generate_token(user_data) {
    const token = jwt.sign(user_data, process.env.SECRET_KEY,{ expiresIn: process.env.TOKEN_EXPIRY_TIME });
    return token; 
}

function decode_token(token) {

    let return_data = {
        user_id: '',
        token_vaild: false,
        message: ''
    };
    const decoded_token = jwt.verify(token, process.env.SECRET_KEY);
    if(decoded_token) {
        const token_expiry = decoded_token.exp;
        const current_time = getExpirytime(0); 
        if( current_time < token_expiry ) { 
            return_data.user_id = decoded_token.user_id;
            return_data.token_vaild = true;
        } else {
            return_data.user_id = decoded_token.user_id;
            return_data.token_vaild = false;
            return_data.message = 'Token is expired';

        }
    } else {
        return_data.user_id = '';
        return_data.token_vaild = false;
        return_data.message = 'Token not found';
    }
    
    return return_data; 
}

module.exports = {
    generate_token,decode_token
};



