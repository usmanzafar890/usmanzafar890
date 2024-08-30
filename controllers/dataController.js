const db = require('../config/dataBase');

const getAllData = async (req, res) => {
  try {
    // Fetching all education documents
    const educationSnapshot = await db.collection('educations').get();
    const education = educationSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Fetching all skills documents
    const skillsSnapshot = await db.collection('skills').get();
    const skills = skillsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Fetching all services documents
    const servicesSnapshot = await db.collection('services').get();
    const services = servicesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Fetching all experiences documents
    const experiencesSnapshot = await db.collection('experiences').get();
    const experiences = experiencesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Responding with all the collected data
    res.status(200).json({
      education,
      skills,
      services,
      experiences,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllData,
};
