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

  async update(request, response){
    const { name, email, password, passwordNew } = request.body
    const user_id = request.user.id
    
    const user = await knex("users").where({ id: user_id }).first()

    if(!user){
      throw new AppError("Usuário não cadastrado!")
    }

    const checkEmailIsUsed = await knex("users").where({ email }).first()

    if(checkEmailIsUsed && checkEmailIsUsed.id !== user_id){
      throw new AppError("Email já está sendo utilizado!")
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if(!password){
      throw new AppError("Digite a senha atual para prosseguir!")
    }

    if(password && passwordNew){
      const checkPasswords = await compare(password, user.password)

      if(!checkPasswords){
        throw new AppError("A senha atual não confere!")
      }

      user.password = await hash(passwordNew, 8)
    }

    await knex("users").update({ name: user.name, email: user.email, password: user.password }).where({ id: user_id })

    return response.json({
      "status": "Usuário atualizado com sucesso!"
    })
  }
}

module.exports = UsersController