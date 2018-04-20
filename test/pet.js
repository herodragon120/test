//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Pets', () => {
    beforeEach((done) => {
    //Before each test we empty the database in your case
    done();
});
/*
 * Test the /GET route
 */
describe('/GET pets', () => {
    it('it should GET all the pets', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
        res.should.have.status(200);
        done();
});
});
});
});