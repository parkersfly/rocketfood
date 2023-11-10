const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class PlatesController {
  async create(request, response) {
    const { title, description, category, price, tags } = request.body;
    const user_id = request.user.id;

    // const pictureFilename = request.file.filename
    
    // const diskStorage = new DiskStorage()
    
    // console.log({ title, pictureFilename})
    // const filename = await diskStorage.saveFile(pictureFilename)

    const [plate_id] = await knex("plates").insert({
      title,
      description,
      category,
      price,
      user_id,
    })

      const tagsInsert = tags.map(name => {
        return {
          name,
          user_id,
          plate_id
         }
      })

     await knex("tags").insert(tagsInsert)

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const plate = await knex("plates").where({ id }).first();
    const tags = await knex("tags").where({ plate_id: id }).orderBy("name");

    const plates = {
      ...plate,
      tags,
    };

    return response.json(plates);
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("plates").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { title, tags } = request.query;

     let plates;

    // plates = await knex("plates");

    plates = await knex("plates")
    .whereLike("title", `%${title}%`)
    .orderBy("title")


    // if(tags){
    //   const filterTags = tags.split(',').map(tag => tag.trim())

    //    plates = await knex("tags")
    //    .select([
    //     "plates.id",
    //     "plates.title",
    //    ])
    //    .where("plates")
    //    .whereLike("plates.title", `%${title}%`)
    //    .whereIn("name", filterTags)
    //    .innerJoin("plates", "plates.id", "tags.plate_id")
    //    .orderBy("plates.title")

    // } else {
    //    plates = await knex("plates")
    //   .whereLike("title", `%${title}%`)
    //   .orderBy("title")
    // }

    // const plateTags = await knex("tags").where("plate_id")
    // const platesWithTags = plates.map(plate => {
    //   const plateTag = plateTags.filter(tag => tag.plate_id === plate.id)

    //   return {
    //     ...plate,
    //     tags: plateTag
    //   }
    // })

    // return response.json(platesWithTags)

    return response.json(plates)
  }
}

module.exports = PlatesController;
