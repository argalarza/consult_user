const { getUserByUsernameFromPostgres } = require('../models/user');

const showUser = async (req, res) => {
  const { username } = req.params;

  try {
    // Buscar al usuario en PostgreSQL,
    const user = await getUserByUsernameFromPostgres(username);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Enviar la información del usuario
    res.json(user);

  } catch (error) {
    console.error('Error showing user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { showUser };
