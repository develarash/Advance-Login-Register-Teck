const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { username, password } = req.body;

  if (!username && !password) {
    return res
      .status(400)
      .json({ message: "نام کاربری و رمز عبور نمیتوانند خالی بمانند" });
  }
  const duplicate = await User.findOne({ username: username }).exec();

  if (duplicate) return res.sendStatus(409);

  try {
    const hashedPws = await bcrypt.hash(password, 15);

    await User.create({
      username,
      password: hashedPws,
    });
    res
      .status(201)
      .json({ success: `حساب کاربری${username}با موفقیت ایجاد شد` });
  } catch {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { register };
