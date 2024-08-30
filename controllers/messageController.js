const db = require('../config/dataBase');

exports.getMessages = async (req, res) => {
  try {
    const snapshot = await db.collection('messages').get();
    const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMessage = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newMessage = {
      name,
      email,
      phone,
      message,
    };

    const docRef = await db.collection('messages').add(newMessage);
    const savedMessage = { id: docRef.id, ...newMessage };
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMessage = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, message } = req.body;

  try {
    const messageRef = db.collection('messages').doc(id);

    await messageRef.update({
      name,
      email,
      phone,
      message,
    });

    const updatedMessage = { id, name, email, phone, message };
    res.json(updatedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMessage = async (req, res) => {
  const { id } = req.params;

  try {
    const messageRef = db.collection('messages').doc(id);
    await messageRef.delete();
    res.json({ message: 'Message removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
