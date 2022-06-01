const jwt = require('jsonwebtoken');

const secret = 'mysupersecret';
const expiration = '1h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
            console.log("Token: ", token);
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration});
            req.user = data;
        } catch {
            console.log('Invalid token');
        }
        return req;
        

    },

    signToken: function({ userName, email, _id }) {
        const payload = { userName, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
    }

}
