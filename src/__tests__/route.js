const request = require('supertest');
const express = require('express');
const app = require('../../server/app');
const nock = require('nock');

describe('/api', function() {
  afterEach(() => {
    nock.cleanAll();
  })
  describe('GET /items', function(){
    it('respond with json', function(done) {
      request(app)
        .get('/api/v1/items?search=autos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  })
  describe('GET /items', function(){
    it('respond with json', function(done) {
      request(app)
        .get('/api/v1/items/MLA682618052')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  })
});
