const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const { hash, compare } = require("bcryptjs")

class UsersController {
  async create(request, response){
    const { name, email, password } = request.body

    const checkIfEmailExists = await knex("users").where({ email }).first()

    if(checkIfEmailExists){
      throw new AppError("Este e-mail já está sendo utilizado!")
    }

    if(!name || !email || !password){
      throw new AppError("Preencha todos os campos para criar a conta!")
    }

    const passwordHashed = await hash(password, 8)

    await knex("users").insert({ name, email, password: passwordHashed })

    return response.json({
      "status": "conta criada com sucesso!"
    })
  }
}

module.exports = UsersController