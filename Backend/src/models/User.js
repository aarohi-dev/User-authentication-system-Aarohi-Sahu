import pool from "../config/db.js";

export const createUser = async (name, email, hashedPassword, phone) => {
  const result = await pool.query(
    "INSERT INTO users (name, email, password, phone) VALUES ($1, $2, $3, $4) RETURNING id, name, email, phone",
    [name, email, hashedPassword, phone]
  );
  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
};

export const updateUserProfile = async (id, name, phone, preferences) => {
  const result = await pool.query(
    "UPDATE users SET name=$1, phone=$2, preferences=$3 WHERE id=$4 RETURNING id, name, email, phone, preferences",
    [name, phone, preferences, id]
  );
  return result.rows[0];
};
