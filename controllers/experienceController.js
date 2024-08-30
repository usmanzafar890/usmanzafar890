const db = require('../config/dataBase');

exports.getExperiences = async (req, res) => {
  try {
    const snapshot = await db.collection('experiences').get();
    const experiences = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createExperience = async (req, res) => {
  const { role, company, duration, location, responsibilities } = req.body;

  try {
    const newExperience = {
      role,
      company,
      duration,
      location,
      responsibilities,
    };

    const docRef = await db.collection('experiences').add(newExperience);
    const savedExperience = { id: docRef.id, ...newExperience };
    res.status(201).json(savedExperience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateExperience = async (req, res) => {
  const { id } = req.params;
  const { role, company, duration, location, responsibilities } = req.body;

  try {
    const experienceRef = db.collection('experiences').doc(id);

    await experienceRef.update({
      role,
      company,
      duration,
      location,
      responsibilities,
    });

    const updatedExperience = { id, role, company, duration, location, responsibilities };
    res.json(updatedExperience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteExperience = async (req, res) => {
  const { id } = req.params;

  try {
    const experienceRef = db.collection('experiences').doc(id);
    await experienceRef.delete();
    res.json({ message: 'Experience removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
