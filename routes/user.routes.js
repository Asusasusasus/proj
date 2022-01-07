const Router = require('express');

const router = new Router();

const userController = require('../controller/user.controller'); 

router.post('/movies', userController.addFilm)
router.delete('/movies/1', userController.deleteFilm)
router.get('/movies/1', userController.showFilmInfo)
router.get('/movies/3', userController.showSortedListOfFilms)
router.get('/movie/2.2', userController.findFilmName)
router.get('/movie/2', userController.findFilmActorName)
router.post('/movies/import', userController.addFromFile)

module.exports = router;