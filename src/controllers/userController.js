import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

export const updateUserAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      throw createHttpError(400, 'No file uploaded');
    }

    // Завантажуємо на Cloudinary
    const result = await saveFileToCloudinary(req.file.buffer);

    // Оновлюємо користувача
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { avatar: result.secure_url },
      { new: true }
    );

    if (!user) {
      throw createHttpError(404, 'User not found');
    }

    // Повертаємо URL
    res.status(200).json({ 
      message: "Avatar updated successfully",
      url: user.avatar 
    });

  } catch (error) {
    next(error);
  }
};