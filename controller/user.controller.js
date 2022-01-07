const { Op } = require("sequelize");
const fs = require('fs');
const Sequelize = require("../films");

class UserController {
     async addFilm(req, res) { 
      try {
        const {title, year, format, actors} = req.body; 
        const newFilm = await Sequelize.create(({title, year, format, actors}));
        res.json(newFilm); 
      } catch (e) {
          console.log(e)
      }
     } 
    
    async deleteFilm(req, res) {
     try {
        const {title, year, format, actors} = req.body;
        const deletedFilm = await Sequelize.destroy({
            where: {
                title,
                year,
                format
            }
        });
        (deletedFilm) ? console.log('deleted!' + deletedFilm.title) : console.log('no such film');
        res.json(deletedFilm);
      } catch (e) {
         console.log(e)
      }      
    }

    async showFilmInfo(req, res) { 
     try {
        const {title, year, format, actors} = req.body;
        const foundFilm = await Sequelize.findAll({
            where: {
                title,
                year,
                format,
            }
        });
        res.json(foundFilm)
      } catch (e) {
         console.log(e.message)
      }        
    }

    async showSortedListOfFilms(req, res) {  
     try {
        const sortedList = await Sequelize.findAll({
            order: [
                ['title', 'ASC'],
            ]
            });
        res.json(sortedList);    
      } catch (e) {
        console.log(e.message)
      }    
    }

    async findFilmName(req, res) {
     try {
        const {title} = req.body;
        const foundFilm = await Sequelize.findAll({
            where: {
               title,
            }
        });
        res.json(foundFilm);
      } catch (e) {
        console.log(e.message)
      }   
    }

    async findFilmActorName(req, res) {
     try {
        const {actors} = req.body;
        console.log(actors)
        const filmFound = await Sequelize.findAll({
            where: {
              actors: {
                [Op.contains]: [actors],
              } 
            }
        })
        res.json(filmFound)    
      } catch (e) {
        console.log(e)
      }
    }
       
    async addFromFile(req, res) {
      try {
         fs.readFile('C:/dev/test.txt')
      } catch (e) {
        console.log(e)
      }  
    }
}

module.exports = new UserController();
