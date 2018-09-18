// const mongoose = require('mongoose');
const { mongoose, connect, disconnect } = require('./testConfig.js');
const { createMovie, deleteMovie, getMovie, editMovie, getMovieReview, createMovieReview, deleteMovieReview } = require('../models');
const axios = require('axios');

const testMovieData = require('./testMovie.json');
const testMovieReviewData = require('./testMovieReview.json');

beforeAll((done) => {
  // return mongoose.connect('mongodb://localhost/fMDB')
  return connect(done);
});

afterAll((done) => {
  return disconnect(done);
});

describe('db models', () => {
  beforeEach(() => {
    return Promise.all([createMovie(testMovieData), createMovieReview(testMovieReviewData)]);
  });
  afterEach(() => {
    // delete movie 100000
    return Promise.all([deleteMovie(testMovieData.id), deleteMovieReview(testMovieReviewData.id)]);
  });

  test('Creates and retrieves a movie with a given id', (done) => {
    // dummy data
    expect.assertions(2);
    getMovie(testMovieData.id)
      .then(result => {
        console.log(result.id);
        expect(result).toBeTruthy();
        expect(result.id).toEqual(1000000);
        done();
      })
  });

  test('Edits a movie with a given id (edit movie title property)', (done) => {
    expect.assertions(1);
    const newMovieTitle = 'New Title';

    editMovie(testMovieData.id, 'title', newMovieTitle)
      .then(result => {
        expect(result.title).toBe(newMovieTitle);
        done();
      })
  });

  test('Creates and retrieves a movie review with a given id', (done) => {
    expect.assertions(2);
    getMovieReview(testMovieReviewData.id)
      .then(result => {
        expect(result).toBeTruthy();
        expect(result.id).toEqual(2000000);
        done();
      })
  });
})
