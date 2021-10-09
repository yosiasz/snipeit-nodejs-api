import * as express from 'express';
var got = require("got")

const snipeit = require('../config/index').snipeit;

const url = snipeit.url + 'hardware'
var options = {
  limit: '2',
  offset: '0',
  sort: 'created_at',
  order: 'desc',     
  headers: { 
    'Accept': 'application/json',
    "Authorization": "Bearer " + snipeit.token
  }
};

module.exports = {
    getAssets: async (request: express.Request, response: express.Response) => {
      try {   
        const assets = await got(url, options).json();
        response.send(assets);  
      } catch (error) {
        console.log('getAssets', error)
      }   
    } ,
    getAsset: async (request: express.Request, response: express.Response) => {
      try {   
        const assets = await got(url, options).json();
        response.send(assets);  
      } catch (error) {
        console.log('getAssets', error)
      }   
    }        
};