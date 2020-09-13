const { v4: uuidv4 } = require('uuid');

class ReferenceModel {
  constructor(database) {
    this.database = database;
  }

  async create(data) {
    const id = uuidv4();
    await this.database('reference')
      .insert({ ...data, id });
    return { id };
  }

  get(year) {
    return this.database('reference')
      .select('*')
      .modify((queryBuilder) => {
        if (year) {
          queryBuilder.where('year', year);
        }
      });
  }

  getById(id) {
    return this.database('reference')
      .select('*')
      .where({ id })
      .first();
  }

  update(id, data) {
    return this.database('reference')
      .update({ ...data })
      .where({ id });
  }

  delete(id) {
    return this.database('reference')
      .delete()
      .where({ id });
  }
}

module.exports = ReferenceModel;