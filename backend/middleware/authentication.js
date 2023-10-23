import jwt from 'jsonwebtoken';

const authentication = (req, res, next) => {
    console.log(req.headers.authorization);        // req.get('Authorization')

    try {
        var decoded_token = jwt.verify(req.headers.authorization.split(" ")[1], process.env.SECRET_KEY);
        console.log(decoded_token);
        if (decoded_token.email) {
            next();
        } else {
            res.sendStatus(401);
        }
    } catch (err) {
        res.sendStatus(401);
    }
}

export default authentication;