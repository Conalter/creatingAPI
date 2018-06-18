const express = require('express');
const films = require('../models/films')();
const Film = require('../models/film');
const filmRouter = new express.Router();

const Review = require('../models/review');

filmRouter.get('/id', function(req, res){
  const index = req.params.id;
  res.json({data: films[index]});
});

filmRouter.put('/:id', function(req, res){
  const index = req.params.id;
  film[index] = new Film(req.body);
  res.json({data: film});
});

filmRouter.delete('/:id', function(req, res){
  const index = req.params.id;
  film.splice(index, 1);
  res.json({data: film});
});

filmRouter.get('/', function(req, res){
  res.json(films);
});

filmRouter.post("/", function(req, res){
  const newFilm = new Film(
    req.body
  );
  film.push(newDog);
  res.json({AllDogs: dogs});
});

module.exports = filmRouter;
