class Repository {
  constructor({
    id, name, description, url, language, tags, tagged, createdAt,
  }) {
    this.id = id;
    this.name = name || '';
    this.description = description || '';
    this.url = url || '';
    this.language = language || '';
    this.tagged = tagged || false;
    this.createdAt = createdAt || Date.now();
    this.updatedAt = Date.now();
    this.tags = tags || '';
  }
}

module.exports = Repository;
