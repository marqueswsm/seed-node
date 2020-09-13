class ReferenceService {
  constructor(context) {
    this.referenceModel = context.referenceModel;
  }

  create(data) {
    return this.referenceModel.create(data);
  }

  get(year) {
    return this.referenceModel.get(year);
  }

  getById(id) {
    return this.referenceModel.getById(id);
  }

  update(id, data) {
    return this.referenceModel.update(id, data);
  }

  delete(id) {
    return this.referenceModel.delete(id);
  }
}

module.exports = ReferenceService;