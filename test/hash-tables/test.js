'use strict';

const should = require('chai').should();
const { describe, suite, it } = require('mocha');

const greet = require('../../hash-tables/greet.js');
const isAnagram = require('../../hash-tables/isAnagram.js');

describe('Hash Table', () => {
  suite('#greet', () => {
    xit('should greet user in English if the provided lang is "English"', () => {
      greet('english').should.equal('Welcome a Miami.');
    });

    xit('should greet user in Dutch if the provided lang is "dutch"', () => {
      greet('dutch').should.equal('Welkom a Miami.');
    });

    xit('should greet the user in English for invalid inputs', () => {
      greet('bob').should.equal('Welcome a Miami.');
    });

    xit('should greet the user with the correct lang even if it the input is capitolized', () => {
      greet('Swedish').should.equal('Valkommen a Miami.');
    });
  });

  suite('#isAnagram', () => {
    xit('should return true for the strings "creative" & "reactive"', () => {
      isAnagram('creative', 'reactive').should.be.true;
    });

    xit('should return false for the strings "race" & "case"', () => {
      isAnagram('race', 'case').should.be.false;
    });
  });
});
