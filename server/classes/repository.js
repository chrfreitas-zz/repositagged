class Repository {
  constructor({ id, name, description, url, language, tags }) {
    this.id = id
    this.name = name
    this.description = description
    this.url = url
    this.language = language
    this.tagged = !!tags || false
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
    this.tags = tags || []
  }
}

module.exports = Repository