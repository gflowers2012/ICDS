/***************************************************************** */
/* Author: Gregory R. Flowers Jr. */
/* Date: March 23, 2018 */
/* Description: This DataTransform.js file aquires source data from 
    a separate file and uses the fact table object models to transform 
    information for storage into a MongoDB database. */

/***************************************************************** */

// Include libraries
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const SourceData = require('./DataSource');

// MongoDB Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'ICDS';

// Aqcuire Source Data
var CityTaxCollectorPayments = SourceData.CityTaxCollectorPayments;
var CityUtilityBills = SourceData.CityUtilityBills;
var CityEmployeePaychecks = SourceData.CityEmployeePaychecks;
var CityParksAndRecreationRentals = SourceData.CityParksAndRecreationRentals;

// Transform Data Model
class factTaxCollectorPayment{
    constructor(citizen, property, date, service, paymentAmount){
        this.Citizen = citizen;
        this.Property = property;
        this.Date = date;
        this.Service = service;
        this.PaymentAmount = paymentAmount;
    }
}
class factUtilityPayment{
    constructor (citizen, property, date, service, paymentAmount, balance){
         this.Citizen = citizen;
         this.Property = property;
         this.Date = date;
         this.Service = service;
         this.PaymentAmount = paymentAmount;
         this.Balance = balance;
    }
};
class factEmployeePaycheck{
    constructor (citizen, date, department, property, position, netPayAmount, hourlyRate){
             this.Citizen = citizen;
             this.Date = date;
             this.Department = department;
             this.Property = property;
             this.Position = position;
             this.NetPayAmount = netPayAmount;
             this.HourlyRate = hourlyRate;
        }
    };

class factParksAndRecRentalPayment{
    constructor(citizen, date, venue, paymentAmount){
            this.Citizen = citizen;
            this.Date = date;
            this.Venue = venue;
            this.PaymentAmount = paymentAmount;
    }
};

// Fact Table Arrays
var TaxCollectorPaymentFacts = [{}];
var UtilityPaymentFacts = [{}];
var EmployeePaycheckFacts = [{}];
var ParksAndRecRentalPaymentFacts = [{}];

// Transform and Store Data 
function traverseTaxCollectorPayments(){
    var i = 1;
    var loopDuration = CityTaxCollectorPayments.length;
    //var lastRecord = false;
    
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        while (loopDuration >= i){
            //lastRecord = loopDuration == i;
            var recordOne = getNextRecord(CityTaxCollectorPayments);
            
            var citizen = {name: recordOne.name, license: recordOne.license};
            var properties = recordOne.properties;
            var date = new Date(recordOne.date);
            var service = {type: recordOne.licenseType};
            var paymentAmount = parseFloat(recordOne.totalPayment);


            // Set db variable to MongoDB database using open client
            const db = client.db(dbName);

            var tcp = new factTaxCollectorPayment(citizen, properties, date, service, paymentAmount);

            insertDocuments('TaxCollectorPaymentFacts', tcp, db, function() {
                client.close();
                }); 
                
            TaxCollectorPaymentFacts.push(tcp);

            i++;
        }
    });

    return TaxCollectorPaymentFacts; 
}

function traverseUtilityPayments(){
    var i = 1;
    var loopDuration = CityUtilityBills.length;
    //var lastRecord = false;
    
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        while (loopDuration >= i){
            //lastRecord = loopDuration == i;
            var recordOne = getNextRecord(CityUtilityBills);
            var period = "";
            
            var arrLength = recordOne.period.length;
            var y = 1;
            while(arrLength >= y)
            {
                if(y == 1){
                    period += recordOne.period[y - 1];
                }
                else
                period += ", " + recordOne.period[y - 1];

                y++;
            }

            var citizen = {name: recordOne.name, license: recordOne.license, phone: recordOne.phone};
            var property = {address: recordOne.address};
            var date = new Date(recordOne.paymentDate);
            var service = {type: recordOne.type};
            var paymentAmount = 0; //recordOne.paymentAmount;
            var balance = parseFloat(recordOne.balance);

            // Set db variable to MongoDB database using open client
            const db = client.db(dbName);

            var fup = new factUtilityPayment(citizen, property, date, service, paymentAmount, balance);

            insertDocuments('UtilityPaymentFacts', fup, db, function() {
                client.close();
                }); 
                
            UtilityPaymentFacts.push(fup);

            i++;
        }
    
    });

    return UtilityPaymentFacts;
}

function traverseEmployeePaychecks(){
    var i = 1;
    var loopDuration = CityEmployeePaychecks.length;
    //var lastRecord = false;

    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        while (loopDuration >= i){
            //lastRecord = loopDuration == i;
            var recordOne = getNextRecord(CityEmployeePaychecks);
            
            var citizen = {name: recordOne.employee, license: recordOne.license, phone: recordOne.phone};
            var property = {address: recordOne.address};
            var date = new Date(recordOne.paymentDate);
            var department = recordOne.department;
            var position = recordOne.position;
            var netPayAmount = parseFloat(recordOne.netAmount);
            var hourlyRate = 0;//recordOne.hourlyRate;

            var fep = new factEmployeePaycheck(citizen, date, department, property, position, netPayAmount, hourlyRate);

            // Set db variable to MongoDB database using open client
            const db = client.db(dbName);

            // Call Node.js MongoDB method to insert the document.
            insertDocuments('EmployeePayCheckFacts', fep, db, function() {
                    client.close();
                    }); 

            EmployeePaycheckFacts.push(fep);

            i++;
        }
    });
    return EmployeePaycheckFacts;
}

function traverseParksAndRecRentalPayments(){
    var i = 1;
    var loopDuration = CityParksAndRecreationRentals.length;
    //var lastRecord = false;
    
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        while (loopDuration >= i){
            //lastRecord = loopDuration == i;
            var recordOne = getNextRecord(CityParksAndRecreationRentals);
            
            var citizen = {name: recordOne.renter, license: recordOne.license};
            var venue = {name: recordOne.location, retailLocation: recordOne.venue};
            var date = {payment: new Date(recordOne.paymentDate), rental: new Date(recordOne.rentalDate)};
            var paymentAmount = parseFloat(recordOne.price);

            // Set db variable to MongoDB database using open client
            const db = client.db(dbName);

            var prrf = new factParksAndRecRentalPayment(citizen, venue, date, paymentAmount);

            insertDocuments('ParksAndRecRentalPaymentFacts', prrf, db, function() {
                client.close();
                }); 
                
                ParksAndRecRentalPaymentFacts.push(prrf);

            i++;
        }
    
    });

    return ParksAndRecRentalPaymentFacts;
}

// Main Function Calls
var ww = traverseTaxCollectorPayments();  
var xx = traverseUtilityPayments();
var yy = traverseEmployeePaychecks();
var zz = traverseParksAndRecRentalPayments();


// Allows other .js modules to import and utilize data or functions.
module.exports =
{
    EmployeePaycheckFacts: EmployeePaycheckFacts, 
    UtilityPaymentFacts: UtilityPaymentFacts, 
    TaxCollectorPaymentFacts: TaxCollectorPaymentFacts,
    ParksAndRecRentalPaymentFacts: ParksAndRecRentalPaymentFacts
}

// Pops next record from array
function getNextRecord(arr) {
    return arr.pop();  
}

// MongoDB method to insert documents
const insertDocuments = function( collectionName, obj, db, callback) {
    // Get the documents collection
    const collection = db.collection(collectionName);
    // Insert some documents
    collection.insert(obj, function(err, result) {
     assert.equal(err, null);
     assert.equal(1, result.result.n);
     assert.equal(1, result.ops.length);
     console.log("Inserted 1 " + collectionName + " document into the collection");
     callback(result);
   });
  }