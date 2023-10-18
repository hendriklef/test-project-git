const supertest = require('supertest');
const server = require('../index');
const chai = require('chai');
chai.should();
const api = supertest.agent(server);

//Todo Unit Tests

