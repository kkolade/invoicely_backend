import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hash(password, salt);
  return hashedPassword;
};

export { hashPassword };
