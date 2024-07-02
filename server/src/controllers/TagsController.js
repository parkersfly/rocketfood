const knex = require("../database/knex")

class TagsController {
  async delete(request, response){
    const { id } = request.query
    
    await knex("tags").where({ id }).delete()

    return response.status(201).json({})
  }
}

module.exports = TagsController