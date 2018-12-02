class Repository {
  constructor(id, name, description, url, language) {
    this.id = id
    this.name = name
    this.description = description
    this.url = url
    this.language = language
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
    this.tags = []
  }
}

module.exports = Repository