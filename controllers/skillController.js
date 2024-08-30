const db = require('../config/dataBase');

exports.getSkills = async (req, res) => {
  try {
    const snapshot = await db.collection('skills').get();
    const skills = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSkill = async (req, res) => {
  const { name } = req.body;

  try {
    const newSkill = { name };
    const docRef = await db.collection('skills').add(newSkill);
    const savedSkill = { id: docRef.id, ...newSkill };
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSkill = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const skillRef = db.collection('skills').doc(id);

    await skillRef.update({ name });

    const updatedSkill = { id, name };
    res.json(updatedSkill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    const skillRef = db.collection('skills').doc(id);
    await skillRef.delete();
    res.json({ message: 'Skill removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
