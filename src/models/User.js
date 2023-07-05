const CoreModel = require('./CoreModel');

class User extends CoreModel {
  firstname;
  lastname;
  #email;
  #password;

  constructor(obj) {
    super(obj);

    if (typeof obj.firstname !== "string") {
      throw new Error("User firstname must be a string");
    }
    this.firstname = obj.firstname;

    if (typeof obj.lastname !== "string") {
      throw new Error("User lastname must be a string");
    }
    this.lastname = obj.lastname;

    if (typeof obj.email !== "string") {
      throw new Error("User email must be a string");
    }
    this.#email = obj.email;

    if (typeof obj.password !== "string") {
      throw new Error("User password must be a string");
    }
    this.#password = obj.password;
  }

  get email() { return this.#email; }

  set email(newEmail) {
    if (typeof newEmail !== 'string') {
      throw new Error("User email must be a string");
    }
    this.#email = newEmail;
  }

  static async findAll() {
    try {
      const sql = `SELECT * FROM "user"`;
      const { rows } = await db.query(sql);

      return rows.map((row) => new User(row));
    } catch (err) {
      console.error(err);
    }
  }

  static async findById(id) {
    try {
      const sql = `SELECT * FROM "user" WHERE id = $1`;
      const { rows } = await db.query(sql, [id]);

      if (rows[0]) {
        return new User(rows[0]);
      }
      throw new Error(`No user with id ${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  static async findByEmail(email) {
    try {
      const sql = `SELECT * FROM "user" WHERE email = $1`;
      const { rows } = await db.query(sql, [email]);

      if (!rows[0]) {
        throw new Error(`No user with email ${email}`);
      }

      return new User(rows[0]);
      
    } catch (err) {
      console.error(err);
    }
  }

  async insert() {
    try {
      const sql = `INSERT INTO "user" (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING id`;
      const { rows } = await db.query(sql, [this.firstname, this.lastname, this.#email, this.#password]);

      if (!rows[0]) {
        throw new Error(`Error while creating user`);
      }

      this.id = rows[0].id;
      return this;
      
    } catch (err) {
      console.error(err);
    }
  }

  async update() {
    try {
      const sql = `UPDATE "user" SET firstname = $1, lastname = $2, email = $3, password = $4 WHERE id = $5`;
      const { rows } = await db.query(sql, [this.firstname, this.lastname, this.#email, this.#password, this.id]);

      if (!rows[0]) {
        throw new Error(`Error while updating user`);
      }

      return this;
      
    } catch (err) {
      console.error(err);
    }
  }

  async delete() {
    try {
      const sql = `DELETE FROM "user" WHERE id = $1`;
      const { rows } = await db.query(sql, [this.id]);

      if (!rows[0]) {
        throw new Error(`Error while deleting user`);
      }

      return true;
      
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = User;