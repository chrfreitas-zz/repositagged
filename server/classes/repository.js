class Repository {
  constructor({
    _id, id, name, description, url, language, tags,
  }) {
    this.id = id;
    this.name = name || '';
    this.description = description || '';
    this.url = url || '';
    this.language = language || '';
    this.tagged = !!_id;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
    this.tags = tags || '';
  }
}

module.exports = Repository;
