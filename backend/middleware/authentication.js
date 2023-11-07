import jwt from 'jsonwebtoken';

const authenticate = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    console.log(authorizationHeader)
    if (!authorizationHeader) {
        return res.sendStatus(401); // No Authorization header found
    }

    const token = authorizationHeader.split(' ')[1]; // Take the second part (the token)
    
    try {
        const authentication = jwt.verify(token, process.env.JWT_SECRET_KEY); // return Object with email
        // If the token is verified, the code inside this block will execute.

        if (authentication) {
            next();
        } else {
            res.status(401).json({ message: 'Token verification failed' });
        }

    } catch (error) {
        res.sendStatus(401); // Unauthorized
    }
}


export default authenticate;