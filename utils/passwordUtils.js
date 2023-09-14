import bcrypt from "bcryptjs";

export const hashedPassword = async (Password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(Password, salt);
  return hashedPassword;
};

export const comparePassword = async (Password, hashedPassword) => {
  const isMatch = await bcrypt.compare(Password, hashedPassword);
  return isMatch;
};
