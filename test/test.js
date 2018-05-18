'use strict'

const mocha = require('mocha');
const chai = require('chai');
const mongoose = require('mongoose');
const faker = require('faker');
const chaiHttp = require('chai-http');
const app = require('../server');
const TEST_DATABASE_URL = require('../config');
const should = chai.should();

chai.use(chaiHttp);

describe('PhotBooth Module API Resource', function(){
    it('should return something', function(){
        
        return chai.request(app)
        .get('/')
        .then(function(res){
            res.should.have.status(200);
        });
    });
});