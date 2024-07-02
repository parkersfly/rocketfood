const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class PlatesController {
  async create(request, response) {
    const { title, description, category, price, tags } = request.body;
    const pictureFile = request.file?.filename;
    const user_id = request.user.id;

    const listTags = tags.split(",")

    let filename

    if(pictureFile) {
      const diskStorage = new DiskStorage();
      
      filename = await diskStorage.saveFile(pictureFile);
    }

    const [plate_id] = await knex("plates").insert({
      title,
      description,
      picture: filename,
      category,
      price,
      user_id,
    });

    

    if(tags){
      const tagsInsert = listTags.map(name => {
        return {
          name,
          user_id,
          plate_id,
        };
      });
  
      await knex("tags").insert(tagsInsert);
    }

    return response.json();
  }

  async update(request, response) {
    const { title, category, tags, price, description } = request.body;
    const pictureFile = request.file?.filename;
    const { id } = request.params;
    const user_id = request.user.id;

    const plate = await knex("plates").where({ id }).first();

    let filename

    if(pictureFile) {
      const diskStorage = new DiskStorage();

      if(plate.picture){
        await diskStorage.deleteFile(plate.picture)
      }
      
      filename = await diskStorage.saveFile(pictureFile);
    }

    if (!plate) {
      throw new AppError("Prato não cadastrado!");
    }

     const newTitle = title ? title : plate.title;
     const newDescription = description ? description : plate.description;

    await knex("plates")
      .update({
        title: newTitle,
        category,
        picture: filename,
        price,
        description: newDescription,
      })
      .where({ id });

      if(tags){
        const tagsInsert = tags.map((name) => {
          return {
            name,
            user_id,
            plate_id: id,
          };
        })

        await knex("tags").insert(tagsInsert);
      }
  

    return response.json({
      status: "Prato atualizado com sucesso!",
    });
  }

  async show(request, response) {
    const { id } = request.params;

    const plate = await knex("plates").where({ id }).first();
    const tags = await knex("tags").where({ plate_id: id }).orderBy("name");

    return response.json({
      ...plate,
      tags,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("plates").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { titleOrTags } = request.query;

    let plates;

    if (titleOrTags) {
      plates = await knex("tags")
        .select(["plates.id", "plates.title", "plates.picture"])
        .where(function () {
          this.whereLike("plates.title", `%${titleOrTags}%`)
          .orWhereLike(
            "tags.name",
            `%${titleOrTags}%`
          );
        })
        .groupBy("plates.title")
        .innerJoin("plates", "plates.id", "tags.plate_id");
    } else {
      plates = await knex("plates");
    }

    return response.json(plates);
  }
}

module.exports = PlatesController;
