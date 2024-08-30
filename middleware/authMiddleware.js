const jwt = require('jsonwebtoken');
const admin = require('firebase-admin');
const { secret } = require('../config/jwt');

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, secret);

      // If using Firebase Auth
      const userRecord = await admin.auth().getUser(decoded.id);

      req.user = {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
      };

      next();
    } catch (error) {
      console.error('Token verification error:', error.message);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
