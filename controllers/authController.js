
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const admin = require('firebase-admin');
const db = require('../config/dataBase');
const { secret } = require('../config/jwt');

const generateToken = (firebaseUid) => {
  return jwt.sign({ id: firebaseUid }, secret, {
    expiresIn: '30d',
  });
};

// Signup function
exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists in Firebase
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('username', '==', username).get();

    if (!snapshot.empty) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add new user to Firebase
    const userRef = await usersRef.add({
      username,
      password: hashedPassword,
    });

    const user = {
      _id: userRef.id,
      username,
    };

    res.status(201).json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login function
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('username', '==', username).get();

    if (snapshot.empty) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    let userDoc;
    snapshot.forEach(doc => {
      userDoc = doc;
    });

    const user = userDoc.data();

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({
        _id: userDoc.id,
        username: user.username,
        token: generateToken(userDoc.id),
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
