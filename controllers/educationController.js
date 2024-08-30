const db = require('../config/dataBase');
exports.getEducations = async (req, res) => {
  try {
    const snapshot = await db.collection('educations').get();
    const educations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(educations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createEducation = async (req, res) => {
  const { degree, institution, duration, location } = req.body;

  try {
    const newEducation = {
      degree,
      institution,
      duration,
      location,
    };

    const docRef = await db.collection('educations').add(newEducation);
    const savedEducation = { id: docRef.id, ...newEducation };
    res.status(201).json(savedEducation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEducation = async (req, res) => {
  const { id } = req.params;
  const { degree, institution, duration, location } = req.body;

  try {
    const educationRef = db.collection('educations').doc(id);

    await educationRef.update({
      degree,
      institution,
      duration,
      location,
    });

    const updatedEducation = { id, degree, institution, duration, location };
    res.json(updatedEducation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEducation = async (req, res) => {
  const { id } = req.params;

  try {
    const educationRef = db.collection('educations').doc(id);
    await educationRef.delete();
    res.json({ message: 'Education removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
