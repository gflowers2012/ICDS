/*****************************************************************
 Author: Gregory R. Flowers Jr. 
 Date: April 3, 2018 
 Description: This users.js file is apart of the Express.js backend server.
    The purpose of this file is to implement methods that will serve data from 
    a MongoDB database. More specifically, the user information for the 
    City Services application. 

***************************************************************** */

var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// MongoDB Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'ICDS';
var db;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  db = client.db(dbName);

  
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/taxcollector/:license', function(req, res, next) {
  // Get the documents collection
  const collection = db.collection('TaxCollectorPaymentFacts');
  // Find some documents
  collection.find({'Citizen.license': req.params.license}).toArray(function(err, docs) {
    //assert.equal(err, null);

    if(err == null && docs.length > 0){
      console.log("Found the following records");
      console.log(docs);

      var z = 0;
      var returnData = 'User found: \n';
       //while (z <= (docs.length-1)){
        returnData += docs[z].Citizen.name + ' (' + docs[z].Citizen.license + ') has (' + docs.length + ') Tax Collector records.';
      //} 
      
    }else{
      returnData = "No data found. Thank you.";
    }

    res.send(returnData);
  });

});

router.get('/utility/:license', function(req, res, next) {
  // Get the documents collection
  const collection = db.collection('UtilityPaymentFacts');
  // Find some documents
  collection.find({'Citizen.license': req.params.license}).toArray(function(err, docs) {
    //assert.equal(err, null);

    if(err == null && docs.length > 0){
      console.log("Found the following records");
      console.log(docs);

      var z = 0;
      var returnData = 'User found: \n';
       //while (z <= (docs.length-1)){
        returnData += docs[z].Citizen.name + ' (' + docs[z].Citizen.license + ') has (' + docs.length + ') Utility records.';
      //} 
      
    }else{
      returnData = "No data found. Thank you.";
    }

    res.send(returnData);
  });

});

router.get('/allservices/:license', function(req, res, next) {
  // Get the documents collection
  const collectionTax = db.collection('TaxCollectorPaymentFacts');
  const collectionUtility = db.collection('UtilityPaymentFacts');
  const collectionRetailRentals = db.collection('ParksAndRecRentalPaymentFacts');
  const collectionPaychecks = db.collection('EmployeePaycheckFacts');

  var returnData = {name: '', license: '', returnMessage: '', taxRecords: '', rentalRecords: '', paycheckRecords: '', utilityRecords: ''};
  var citizenFound = false;
  var citizenRecorded = false;

  // Find some documents
  collectionTax.find({'Citizen.license': req.params.license}).toArray(function(err, docs) {
    //assert.equal(err, null);

    if(err == null && docs.length > 0){
      citizenFound = true;
      console.log("Found the following records");
      console.log(docs);

      var z = 0;
       //while (z <= (docs.length-1)){
        returnData.tax = '(' + docs.length + ') Tax Collector records';
        returnData.taxRecords = docs;
      //} 
      if(citizenFound && !citizenRecorded){
        returnData.name =  docs[z].Citizen.name;
        returnData.license = ' (' + docs[z].Citizen.license + ')';
        citizenRecorded = true;
      }

    }else{
      returnData.tax = "(0) Tax Collector records";
    }
  });

  collectionRetailRentals.find({'Citizen.license': req.params.license}).toArray(function(err, docs) {

    if(err == null && docs.length > 0){
      citizenFound = true;
      console.log("Found the following records");
      console.log(docs);

      var z = 0;
       //while (z <= (docs.length-1)){
        returnData.rental = '(' + docs.length + ') Retail Rental records';
        returnData.rentalRecords = docs; 
      //} 
      
      if(citizenFound && !citizenRecorded){
        returnData.name =  docs[z].Citizen.name;
        returnData.license = ' (' + docs[z].Citizen.license + ')';
        citizenRecorded = true;
      }
      
    }else{
      returnData.rental = "(0) Retail Rental records";
    }
  });

  collectionPaychecks.find({'Citizen.license': req.params.license}).toArray(function(err, docs) {
    //assert.equal(err, null);

    if(err == null && docs.length > 0){
      citizenFound = true;
      console.log("Found the following records");
      console.log(docs);

      var z = 0;
       //while (z <= (docs.length-1)){
        returnData.paycheck = '(' + docs.length + ') Employee Paycheck records';
        returnData.paycheckRecords = docs;
      //} 
      
      if(citizenFound && !citizenRecorded){
        returnData.name =  docs[z].Citizen.name;
        returnData.license = ' (' + docs[z].Citizen.license + ')';
        citizenRecorded = true;
      }
      
    }else{
      returnData.paycheck = "(0) Employee Paycheck records";
    }
  });
  
  collectionUtility.find({'Citizen.license': req.params.license}).toArray(function(err, docs) {
    
    if(err == null && docs.length > 0){
      citizenFound = true;
      console.log("Found the following records");
      console.log(docs);

      var z = 0;
      var length = docs.length - 1;

      //while (z <= (length)){
        returnData.utility =  '(' + docs.length + ') Utility records.';
        returnData.utilityRecords = docs;
      //}

      if(citizenFound && !citizenRecorded){
        returnData.name =  docs[z].Citizen.name;
        returnData.license = ' (' + docs[z].Citizen.license + ') ';
        citizenRecorded = true;
      }
    }else{
      returnData.utility = "(0) Utility records.";
    }

    console.log(returnData);

    if(citizenFound)
      returnData.returnMessage = returnData.name + returnData.license + ' has ' + returnData.tax + ', ' + returnData.rental + ', ' + returnData.paycheck + ', ' + returnData.utility;
    else
      returnData.returnMessage = "No user data: " + returnData.tax + ', ' + returnData.rental + ', ' + returnData.paycheck + ', ' + returnData.utility;

  res.send(returnData);
  });
});

router.get('/deleteuser/:license', function(req, res, next) {
  
  // Get the documents collection
  const collectionTax = db.collection('TaxCollectorPaymentFacts');
  const collectionUtility = db.collection('UtilityPaymentFacts');
  const collectionRetailRentals = db.collection('ParksAndRecRentalPaymentFacts');
  const collectionPaychecks = db.collection('EmployeePaycheckFacts');

  var returnData = {name: '', license: '', returnMessage: '', taxRecords: '', rentalRecords: '', paycheckRecords: '', utilityRecords: ''};
  var citizenFound = false;
  var citizenRecorded = false;
  var z = 0;

  // Delete some documents
  collectionTax.deleteMany({'Citizen.license': req.params.license}, function(err, obj) {
    //assert.equal(err, null);

    if(err == null){

      returnData.tax += obj.result.n != undefined ? obj.result.n : "(0)" + " Tax Collector records(s) deleted";
      console.log(returnData.tax); 
    }
  });

  collectionRetailRentals.deleteMany({'Citizen.license': req.params.license}, function(err, obj) {
    //assert.equal(err, null);

    if(err == null){

      returnData.rental += obj.result.n != undefined ? obj.result.n : "(0)" + " Parks & Recreation Rental record(s) deleted";
      console.log(returnData.rental); 
    }
  });

  collectionPaychecks.deleteMany({'Citizen.license': req.params.license}, function(err, obj) {
    //assert.equal(err, null);

    if(err == null){

      returnData.paycheck += obj.result.n != undefined ? obj.result.n : "(0)" + " Employee Paycheck record(s) deleted";
      console.log(returnData.paycheck); 
    }
  });
  
  collectionUtility.deleteMany({'Citizen.license': req.params.license}, function(err, obj) {
    //assert.equal(err, null);

    if(err == null){

      returnData.utility += obj.result.n != undefined ? obj.result.n : "(0)" + " Utility record(s) deleted";
      console.log(returnData.utility); 
    }

    //if(citizenFound)
      returnData.returnMessage = 'Deleted records.';
    //else
      //returnData.returnMessage = "No user data: " + returnData.tax + ', ' + returnData.rental + ', ' + returnData.paycheck + ', ' + returnData.utility;
      
    
  console.log(returnData);
  res.send(returnData);
  });
});

module.exports = router;