const db = require('../config/dataBase');

exports.getServices = async (req, res) => {
  try {
    const snapshot = await db.collection('services').get();
    const services = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createService = async (req, res) => {
  const { name } = req.body;

  try {
    const newService = { name };
    const docRef = await db.collection('services').add(newService);
    const savedService = { id: docRef.id, ...newService };
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateService = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const serviceRef = db.collection('services').doc(id);

    await serviceRef.update({ name });

    const updatedService = { id, name };
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const serviceRef = db.collection('services').doc(id);
    await serviceRef.delete();
    res.json({ message: 'Service removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
