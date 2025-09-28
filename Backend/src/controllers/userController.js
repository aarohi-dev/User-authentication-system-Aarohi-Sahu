import { updateUserProfile } from  "../src/models/User.js";

export const updateProfile = async (req, res) => {
  try {
    const { name, phone, preferences } = req.body;
    const updated = await updateUserProfile(req.user.id, name, phone, preferences);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
