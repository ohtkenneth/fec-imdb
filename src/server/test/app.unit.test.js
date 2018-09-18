const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('it should respond 200 for GET', async (done) => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    done();
  });

  test('it should respond with an index.html file', async (done) => {
    const response = await request(app).get('/');
    expect(response.text.includes('<html>')).toBeTruthy();
    done();
  });
});