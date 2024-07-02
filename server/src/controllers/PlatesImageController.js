const knex = require("../database/knex")

class PlatesImageController {
  async update(request, response){
    const pictureFilename = request.file.filename

    const diskStorage = new DiskStorage()
    
    console.log({ title, pictureFilename})
    const filename = await diskStorage.saveFile(pictureFilename)
  }
}

module.exports = PlatesImageController